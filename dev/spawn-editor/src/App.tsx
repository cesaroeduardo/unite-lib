import React, { useMemo } from "react";
import { maps, spawns } from "unite-lib";
import { MapView } from "./components/MapView";
import { useSpawnEdits, getSpawnsWithIndices } from "./lib/useSpawnEdits";

const CLOCK_SLIDER_MIN = 0;
const CLOCK_SLIDER_MAX = 600;

function clockSecondsToLabel(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

export default function App() {
  const [mapId, setMapId] = React.useState(maps[0]?.id ?? "map-groudon");
  const [snapGrid, setSnapGrid] = React.useState(0.5);
  const [gameClockSeconds, setGameClockSeconds] = React.useState(540);
  const { edits, setPosition, setEdit, exportEdits, applyEdits, undo, canUndo } = useSpawnEdits(spawns);
  const [applyStatus, setApplyStatus] = React.useState<"idle" | "loading" | "ok" | "error">("idle");
  const [applyMessage, setApplyMessage] = React.useState("");
  const applyAll = React.useCallback(async () => {
    setApplyStatus("loading");
    setApplyMessage("");
    const result = await applyEdits();
    if (result.ok) {
      setApplyStatus("ok");
      const n = result.applied ?? 0;
      setApplyMessage(
        n > 0
          ? `${n} edição(ões) aplicada(s) em src/spawns.ts. Atualize a página para ver.`
          : "Nenhuma chave bateu com os spawns atuais. Atualize a página (após npm run build na raiz) e tente de novo."
      );
    } else {
      setApplyStatus("error");
      setApplyMessage(result.error ?? "Erro");
    }
    setTimeout(() => setApplyStatus("idle"), 5000);
  }, [applyEdits]);

  const map = useMemo(
    () => maps.find((m) => m.id === mapId) ?? maps[0],
    [mapId]
  );

  const spawnsWithIndices = useMemo(
    () => (map ? getSpawnsWithIndices(spawns, map.id) : []),
    [map]
  );

  const editCount = Object.keys(edits).length;

  return (
    <div style={{ padding: 16 }}>
      <header style={{ marginBottom: 16, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
        <h1 style={{ margin: 0, fontSize: 20 }}>Spawn position editor</h1>
        <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
          Map:
          <select
            value={mapId}
            onChange={(e) => setMapId(e.target.value)}
            style={{ padding: "6px 10px", borderRadius: 6, background: "#333", color: "#fff", border: "1px solid #555" }}
          >
            {maps.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} ({m.id})
              </option>
            ))}
          </select>
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
          Relógio (visibilidade):
          <input
            type="range"
            min={CLOCK_SLIDER_MIN}
            max={CLOCK_SLIDER_MAX}
            value={gameClockSeconds}
            onChange={(e) => setGameClockSeconds(Number(e.target.value))}
            style={{ width: 120 }}
          />
          <span style={{ minWidth: 40 }}>{clockSecondsToLabel(gameClockSeconds)}</span>
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
          Snap (%):
          <input
            type="number"
            min={0}
            step={0.1}
            value={snapGrid}
            onChange={(e) => setSnapGrid(Number(e.target.value) || 0.5)}
            style={{ width: 64, padding: "6px 8px", borderRadius: 6, background: "#333", color: "#fff", border: "1px solid #555" }}
          />
        </label>
        <button
          type="button"
          onClick={undo}
          disabled={!canUndo}
          title="Desfazer última alteração (Ctrl+Z)"
          style={{
            padding: "8px 14px",
            borderRadius: 6,
            background: canUndo ? "#555" : "#333",
            color: canUndo ? "#fff" : "#666",
            border: "1px solid #555",
            cursor: canUndo ? "pointer" : "default",
          }}
        >
          Desfazer
        </button>
        <button
          type="button"
          onClick={exportEdits}
          style={{
            padding: "8px 14px",
            borderRadius: 6,
            background: editCount ? "#0a7" : "#444",
            color: "#fff",
            border: "none",
            cursor: editCount ? "pointer" : "default",
          }}
        >
          Export edits {editCount > 0 ? `(${editCount})` : ""}
        </button>
        <button
          type="button"
          onClick={applyAll}
          disabled={editCount === 0 || applyStatus === "loading"}
          title="Aplica todas as edições em src/spawns.ts (sem baixar arquivo)"
          style={{
            padding: "8px 14px",
            borderRadius: 6,
            background:
              applyStatus === "loading"
                ? "#444"
                : applyStatus === "ok"
                  ? "#0a7"
                  : editCount
                    ? "#07a"
                    : "#444",
            color: "#fff",
            border: "none",
            cursor: editCount && applyStatus !== "loading" ? "pointer" : "default",
          }}
        >
          {applyStatus === "loading" ? "Aplicando…" : "Apply all"}
        </button>
        {applyMessage && (
          <span style={{ color: applyStatus === "error" ? "#e66" : "#8c8", fontSize: 13 }}>
            {applyMessage}
          </span>
        )}
      </header>

      <p style={{ color: "#888", fontSize: 14, marginBottom: 12 }}>
        Arraste os marcadores para ajustar posição. Clique (sem arrastar) para abrir o menu e editar
        horário de aparecimento e de sumir. Use o slider para ver apenas spawns visíveis naquele
        momento. <strong>Ctrl+Z</strong> desfaz a última alteração (até 15).{" "}
        <strong>Apply all</strong> aplica as edições direto em src/spawns.ts (sem baixar arquivo).
      </p>

      {map && (
        <MapView
          map={map}
          spawnsWithIndices={spawnsWithIndices}
          edits={edits}
          gameClockSeconds={gameClockSeconds}
          onMove={setPosition}
          onEdit={setEdit}
          onApplyAll={applyAll}
          snapGrid={snapGrid}
        />
      )}
    </div>
  );
}
