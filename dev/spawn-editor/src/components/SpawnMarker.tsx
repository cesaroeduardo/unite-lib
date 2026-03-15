import React, { useRef, useCallback, useState, useEffect } from "react";
import { getNeutralImageUrl } from "unite-lib";
import type { MapSpawn } from "unite-lib";
import type { Neutral } from "unite-lib";
import {
  getPosition,
  getSpawnTime,
  getDespawnTime,
  CLOCK_OPTIONS,
} from "../lib/useSpawnEdits";
import type { Edits } from "../lib/useSpawnEdits";

type Props = {
  spawn: MapSpawn;
  neutral: Neutral | undefined;
  globalIndex: number;
  edits: Edits;
  onMove: (globalIndex: number, left: string, top: string, skipHistory?: boolean) => void;
  onEdit: (
    globalIndex: number,
    patch: { left?: string; top?: string; spawnTime?: string; despawnTime?: string }
  ) => void;
  onApplyAll?: () => void;
  snapGrid?: number;
  visible?: boolean;
};

export function SpawnMarker({
  spawn,
  neutral,
  globalIndex,
  edits,
  onMove,
  onEdit,
  onApplyAll,
  snapGrid = 0.5,
  visible = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const didDragRef = useRef(false);
  const hasPushedHistoryRef = useRef(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { left, top } = getPosition(spawn, globalIndex, edits);
  const spawnTime = getSpawnTime(spawn, globalIndex, edits);
  const despawnTime = getDespawnTime(spawn, globalIndex, edits);

  const parsePercent = (s: string) => parseFloat(s.replace("%", "")) || 0;
  const toPercent = (n: number) => `${Math.round(n * 100) / 100}%`;

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      const pop = document.getElementById(`spawn-dropdown-${globalIndex}`);
      if (pop?.contains(e.target as Node)) return;
      didDragRef.current = false;
      hasPushedHistoryRef.current = false;
      e.preventDefault();
      const el = ref.current;
      if (!el) return;
      const container = el.closest("[data-map-container]") as HTMLElement;
      if (!container) return;
      el.setPointerCapture(e.pointerId);

      const rect = container.getBoundingClientRect();
      let currentLeft = parsePercent(left);
      let currentTop = parsePercent(top);

      const onPointerMove = (e: PointerEvent) => {
        didDragRef.current = true;
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        const snap = (v: number) =>
          snapGrid ? Math.round(v / snapGrid) * snapGrid : v;
        currentLeft = Math.max(0, Math.min(100, snap(x)));
        currentTop = Math.max(0, Math.min(100, snap(y)));
        const skipHistory = hasPushedHistoryRef.current;
        if (!hasPushedHistoryRef.current) hasPushedHistoryRef.current = true;
        onMove(globalIndex, toPercent(currentLeft), toPercent(currentTop), skipHistory);
      };

      const onPointerUp = (upEvent: PointerEvent) => {
        el.releasePointerCapture(e.pointerId);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
        if (!didDragRef.current) {
          const pop = document.getElementById(`spawn-dropdown-${globalIndex}`);
          if (pop?.contains(upEvent.target as Node)) return;
          setDropdownOpen((o) => !o);
        }
      };

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    },
    [left, top, globalIndex, onMove, snapGrid]
  );

  useEffect(() => {
    if (!dropdownOpen) return;
    const close = (e: MouseEvent) => {
      const el = ref.current;
      const pop = document.getElementById(`spawn-dropdown-${globalIndex}`);
      if (el?.contains(e.target as Node) || pop?.contains(e.target as Node)) return;
      setDropdownOpen(false);
    };
    window.addEventListener("mousedown", close);
    return () => window.removeEventListener("mousedown", close);
  }, [dropdownOpen, globalIndex]);

  const imageUrl = neutral
    ? getNeutralImageUrl(neutral, { baseUrl: "" })
    : null;

  if (!visible) return null;

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      className="spawn-marker"
      style={{
        left,
        top,
        position: "absolute",
        transform: "translate(-50%, -50%)",
        width: 32,
        height: 32,
        cursor: "grab",
        zIndex: dropdownOpen ? 20 : 10,
        border: "2px solid rgba(255,255,255,0.9)",
        borderRadius: "50%",
        overflow: "visible",
        background: "#333",
      }}
      onPointerDown={handlePointerDown}
      title={`${spawn.neutralId} @ ${spawnTime} (idx ${globalIndex}) — clique para editar`}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={spawn.neutralId}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
          draggable={false}
        />
      ) : (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            fontSize: 10,
          }}
        >
          {spawn.neutralId.slice(0, 2)}
        </span>
      )}
      {dropdownOpen && (
        <div
          id={`spawn-dropdown-${globalIndex}`}
          style={{
            position: "absolute",
            left: "50%",
            top: "100%",
            marginTop: 4,
            transform: "translateX(-50%)",
            zIndex: 30,
            minWidth: 200,
            background: "#2a2a2a",
            border: "1px solid #555",
            borderRadius: 8,
            padding: 12,
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ fontWeight: 600, marginBottom: 8 }}>
            {spawn.neutralId} <span style={{ color: "#888", fontWeight: 400 }}>#{globalIndex}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12 }}>
              Aparece (spawn)
              <select
                value={spawnTime}
                onChange={(e) =>
                  onEdit(globalIndex, { spawnTime: e.target.value, left, top })
                }
                style={{
                  padding: "6px 8px",
                  borderRadius: 6,
                  background: "#333",
                  color: "#fff",
                  border: "1px solid #555",
                }}
              >
                {[...new Set([spawnTime, ...CLOCK_OPTIONS])]
                  .sort((a, b) => parseClock(b) - parseClock(a))
                  .map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
              </select>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12 }}>
              Some (despawn) — opcional
              <select
                value={despawnTime ?? ""}
                onChange={(e) =>
                  onEdit(globalIndex, {
                    despawnTime: e.target.value || undefined,
                    left,
                    top,
                  })
                }
                style={{
                  padding: "6px 8px",
                  borderRadius: 6,
                  background: "#333",
                  color: "#fff",
                  border: "1px solid #555",
                }}
              >
                <option value="">— não some —</option>
                {CLOCK_OPTIONS.filter((t) => parseClock(t) < parseClock(spawnTime)).map(
                  (t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  )
                )}
              </select>
            </label>
            <div style={{ fontSize: 11, color: "#888" }}>
              Posição: {left}, {top}
            </div>
            {onApplyAll && (
              <button
                type="button"
                onClick={() => {
                  onApplyAll();
                  setDropdownOpen(false);
                }}
                style={{
                  marginTop: 8,
                  padding: "6px 12px",
                  borderRadius: 6,
                  background: "#07a",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                }}
              >
                Apply (grava em src/spawns.ts)
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function parseClock(s: string): number {
  const [m, sec = 0] = s.split(":").map(Number);
  return m * 60 + sec;
}
