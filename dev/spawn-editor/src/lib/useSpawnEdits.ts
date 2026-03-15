import { useState, useCallback, useRef, useEffect } from "react";
import type { MapSpawn } from "unite-lib";

export type SpawnEdit = {
  left: string;
  top: string;
  spawnTime?: string;
  despawnTime?: string;
};
export type Edits = Record<string, SpawnEdit>;

const EDITORS_JSON_PATH = "edits.json";
const MAX_UNDO_HISTORY = 15;

/**
 * Stable key for a spawn. Same format as dev/scripts/apply-spawn-edits.js.
 * Use in edits.json so edits still match after adding/reordering spawns.
 */
export function makeStableKey(spawn: MapSpawn): string {
  return [
    spawn.mapId,
    spawn.neutralId,
    spawn.spawnTime,
    spawn.infoKey ?? "",
    spawn.left,
    spawn.top,
  ].join("|");
}

/**
 * For a given mapId, returns spawns for that map and their global indices in the full spawns array.
 */
export function getSpawnsWithIndices(
  spawns: MapSpawn[],
  mapId: string
): { spawn: MapSpawn; globalIndex: number }[] {
  return spawns
    .map((spawn, i) => ({ spawn, globalIndex: i }))
    .filter(({ spawn }) => spawn.mapId === mapId);
}

/** Parse game clock "MM:SS" to seconds remaining (10:00 = 600, 0:00 = 0). */
export function parseGameClock(s: string): number {
  const parts = String(s).trim().split(":");
  const m = parseInt(parts[0], 10) || 0;
  const sec = parseInt(parts[1], 10) || 0;
  return m * 60 + sec;
}

/** Whether a spawn is visible at the given game clock (seconds remaining). */
export function isSpawnVisibleAtClock(
  spawn: MapSpawn,
  globalIndex: number,
  edits: Edits,
  clockSeconds: number
): boolean {
  const spawnTime = getSpawnTime(spawn, globalIndex, edits);
  const despawnTime = getDespawnTime(spawn, globalIndex, edits);
  const spawnSec = parseGameClock(spawnTime);
  if (clockSeconds > spawnSec) return false;
  if (despawnTime != null && despawnTime !== "") {
    const despawnSec = parseGameClock(despawnTime);
    if (clockSeconds <= despawnSec) return false;
  }
  return true;
}

/**
 * Get effective left/top for a spawn (edited or original).
 */
export function getPosition(
  spawn: MapSpawn,
  globalIndex: number,
  edits: Edits
): { left: string; top: string } {
  const e = edits[String(globalIndex)];
  return {
    left: e?.left || spawn.left,
    top: e?.top || spawn.top,
  };
}

export function getSpawnTime(
  spawn: MapSpawn,
  globalIndex: number,
  edits: Edits
): string {
  const e = edits[String(globalIndex)];
  return e?.spawnTime ?? spawn.spawnTime;
}

export function getDespawnTime(
  spawn: MapSpawn,
  globalIndex: number,
  edits: Edits
): string | undefined {
  const e = edits[String(globalIndex)];
  const v = e?.despawnTime;
  if (v != null && v !== "") return v;
  return spawn.despawnTime;
}

/**
 * Hook: edits state, undo history (last 15), and export.
 * Pass full spawns array so export uses stable keys (survives new neutrals / reorder).
 */
export function useSpawnEdits(spawns: MapSpawn[]) {
  const [edits, setEdits] = useState<Edits>({});
  const [undoStackLength, setUndoStackLength] = useState(0);
  const historyRef = useRef<Edits[]>([]);

  const pushHistory = useCallback((prev: Edits) => {
    if (historyRef.current.length >= MAX_UNDO_HISTORY) {
      historyRef.current.shift();
    }
    historyRef.current.push(JSON.parse(JSON.stringify(prev)));
    setUndoStackLength(historyRef.current.length);
  }, []);

  const undo = useCallback(() => {
    if (historyRef.current.length === 0) return;
    const prev = historyRef.current.pop();
    setUndoStackLength(historyRef.current.length);
    if (prev) setEdits(prev);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "z") {
        e.preventDefault();
        undo();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [undo]);

  const setPosition = useCallback(
    (globalIndex: number, left: string, top: string, skipHistory?: boolean) => {
      setEdits((prev) => {
        if (!skipHistory) pushHistory(prev);
        const key = String(globalIndex);
        const cur = prev[key];
        return {
          ...prev,
          [key]: { ...cur, left, top, spawnTime: cur?.spawnTime, despawnTime: cur?.despawnTime },
        };
      });
    },
    [pushHistory]
  );

  const setEdit = useCallback(
    (
      globalIndex: number,
      patch: Partial<Pick<SpawnEdit, "left" | "top" | "spawnTime" | "despawnTime">>
    ) => {
      setEdits((prev) => {
        pushHistory(prev);
        const key = String(globalIndex);
        const cur = prev[key];
        const despawn =
          patch.despawnTime !== undefined
            ? (patch.despawnTime || undefined)
            : cur?.despawnTime;
        return {
          ...prev,
          [key]: {
            left: patch.left ?? cur?.left ?? "",
            top: patch.top ?? cur?.top ?? "",
            spawnTime: patch.spawnTime ?? cur?.spawnTime,
            despawnTime: despawn,
          },
        };
      });
    },
    [pushHistory]
  );

  const exportEdits = useCallback(() => {
    const byStableKey = editsToStableKeys(edits, spawns);
    const blob = new Blob([JSON.stringify(byStableKey, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = EDITORS_JSON_PATH;
    a.click();
    URL.revokeObjectURL(a.href);
  }, [edits, spawns]);

  const applyEdits = useCallback(async (): Promise<{ ok: boolean; error?: string; applied?: number }> => {
    const byStableKey = editsToStableKeys(edits, spawns);
    if (Object.keys(byStableKey).length === 0) {
      return { ok: false, error: "Nenhuma edição para aplicar." };
    }
    try {
      const res = await fetch("/__apply-edits__", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ edits: byStableKey }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string; applied?: number };
      if (!res.ok) return { ok: false, error: data.error ?? `HTTP ${res.status}` };
      return data;
    } catch (e) {
      return {
        ok: false,
        error: e instanceof Error ? e.message : String(e),
      };
    }
  }, [edits, spawns]);

  return {
    edits,
    setPosition,
    setEdit,
    exportEdits,
    applyEdits,
    undo,
    canUndo: undoStackLength > 0,
    undoStackLength,
  };
}

function editsToStableKeys(edits: Edits, spawns: MapSpawn[]): Record<string, SpawnEdit> {
  const byStableKey: Record<string, SpawnEdit> = {};
  for (const key of Object.keys(edits)) {
    const index = parseInt(key, 10);
    if (Number.isNaN(index) || index < 0 || index >= spawns.length) continue;
    const spawn = spawns[index];
    const e = edits[key];
    byStableKey[makeStableKey(spawn)] = {
      left: e?.left ?? spawn.left,
      top: e?.top ?? spawn.top,
      spawnTime: e?.spawnTime ?? spawn.spawnTime,
      despawnTime: e?.despawnTime !== undefined ? e.despawnTime : spawn.despawnTime,
    };
  }
  return byStableKey;
}

/** Common game clock options for dropdowns. */
export const CLOCK_OPTIONS = [
  "10:00", "09:59", "09:45", "09:40", "09:35", "09:30", "09:20", "09:15", "09:10", "09:00",
  "08:40", "08:30", "08:00", "07:00", "02:30", "02:00",
];
