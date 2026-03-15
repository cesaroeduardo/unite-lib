import { getNeutralById, getMapImageUrl } from "unite-lib";
import type { Map as MapType } from "unite-lib";
import { SpawnMarker } from "./SpawnMarker";
import {
  type Edits,
  isSpawnVisibleAtClock,
} from "../lib/useSpawnEdits";

type Props = {
  map: MapType;
  spawnsWithIndices: { spawn: import("unite-lib").MapSpawn; globalIndex: number }[];
  edits: Edits;
  gameClockSeconds: number;
  onMove: (globalIndex: number, left: string, top: string) => void;
  onEdit: (
    globalIndex: number,
    patch: { left?: string; top?: string; spawnTime?: string; despawnTime?: string }
  ) => void;
  onApplyAll?: () => void;
  snapGrid?: number;
};

export function MapView({
  map,
  spawnsWithIndices,
  edits,
  gameClockSeconds,
  onMove,
  onEdit,
  onApplyAll,
  snapGrid = 0.5,
}: Props) {
  const mapImageUrl = getMapImageUrl(map, "2", { baseUrl: "" });

  return (
    <div
      data-map-container
      style={{
        position: "relative",
        display: "inline-block",
        maxWidth: "100%",
      }}
    >
      <img
        src={mapImageUrl}
        alt={map.name}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          maxHeight: "85vh",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "auto" }}>
          {spawnsWithIndices.map(({ spawn, globalIndex }) => (
            <SpawnMarker
              key={globalIndex}
              spawn={spawn}
              neutral={getNeutralById(spawn.neutralId)}
              globalIndex={globalIndex}
              edits={edits}
              onMove={onMove}
              onEdit={onEdit}
              onApplyAll={onApplyAll}
              snapGrid={snapGrid}
              visible={isSpawnVisibleAtClock(
                spawn,
                globalIndex,
                edits,
                gameClockSeconds
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
