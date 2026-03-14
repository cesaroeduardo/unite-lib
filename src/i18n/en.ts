import pokemons from "../pokemons";
import maps from "../maps";
import neutrals from "../neutrals";

/** Slug from roster image path: "pokemons/roster-venusaur.png" -> "venusaur" */
function slugFromMain(mainPath: string): string {
  return mainPath.replace(/^pokemons\/roster-/, "").replace(/\.png$/, "");
}

const names: Record<string, string> = {};
for (const p of pokemons) {
  names[slugFromMain(p.images.main)] = p.name;
}
for (const m of maps) {
  names[m.id] = m.name;
  if (m.description) names[`${m.id}.description`] = m.description;
}
for (const n of neutrals) {
  names[n.id] = n.name;
}

// Aliases for slug variants (e.g. kebab-case "mega-mewtwo-x" from display name).
names["mega-mewtwo-x"] = "Mega Mewtwo X";
names["mega-mewtwo-y"] = "Mega Mewtwo Y";

// Spawn info (HTML). Other locales override same keys for translations.
Object.assign(names, {
  "spawn.info.groudon.boss":
    "<p>When defeated, all team members alive receive a <strong>buff</strong> and <strong>15 aeos points</strong>.<br>This buff is <strong>permanent until the holder is KO'd</strong>. When the holder is <strong>KO'd</strong>, the buff <strong>transfers to the killer</strong>.<br>It provides a <strong>goal-scoring speed boost</strong>, a <strong>huge damage boost</strong>, and a <strong>small shield</strong>.<br>Always spawn at 2:00.</p>",
  "spawn.info.bunnelby.initial":
    "<p>They <strong>spawn at the beginning of the game</strong> and <strong>never respawn</strong> once killed.</p><p>Give 2 points.</p>",
  "spawn.info.bunnelby.lane_940":
    "<p>Starts spawning at <strong>9:40</strong>.</p><p>When defeated, grants <strong>2 points</strong> and respawn after <strong>60 seconds</strong>.</p><p>If either of the <strong>first towers</strong> in the lane is destroyed, it <strong>disappears</strong>.</p>",
  "spawn.info.bunnelby.lane_920":
    "<p>Starts spawning at <strong>9:20</strong>.</p><p>When defeated, grants <strong>2 points</strong> and respawn after <strong>60 seconds</strong>.</p><p>If either of the <strong>first towers</strong> in the lane is destroyed, it <strong>disappears</strong>.</p>",
  "spawn.info.bunnelby.lane_915":
    "<p>Starts spawning at <strong>9:15</strong>.</p><p>When defeated, grants <strong>2 points</strong> and respawn after <strong>60 seconds</strong>.</p><p>If either of the <strong>first towers</strong> in the lane is destroyed, it <strong>disappears</strong>.</p>",
  "spawn.info.accelgor":
    "<p>Starts spawning at <strong>9:45</strong>.</p><p>When defeated, grants <strong>4 / 7 points</strong> and a <strong>buff</strong>. <strong>Respawns after 60 seconds</strong>.</p><p>This buff lasts for <strong>70 seconds</strong> and provides a <strong>10% move cooldown reduction</strong>.</p>",
  "spawn.info.escavalier":
    "<p>Starts spawning at <strong>9:45</strong>.</p><p>When defeated, grants <strong>4 / 7 points</strong> and a <strong>buff</strong>. <strong>Respawns after 60 seconds</strong>.</p><p>This buff lasts for <strong>70 seconds</strong> and provides <strong>basic attacks extra damage and decreases opponent movement speed for a short time</strong>.</p>",
  "spawn.info.baltoy.generic":
    "<p>Starts spawning at <strong>9:45</strong>.</p><p>When defeated, grants <strong>2 points</strong>. <strong>Respawns after 60 seconds</strong>.</p>",
  "spawn.info.baltoy.lane_940":
    "<p>Starts spawning at <strong>9:40</strong>.</p><p>When defeated, grants <strong>2 points</strong>. <strong>Respawns after 60 seconds</strong>.</p><p>If either of the <strong>first towers</strong> in the lane is destroyed, it <strong>disappears</strong>.</p>",
  "spawn.info.baltoy.lane_920":
    "<p>Starts spawning at <strong>9:40</strong>.</p><p>When defeated, grants <strong>2 points</strong>. <strong>Respawns after 60 seconds</strong>.</p><p>If either of the <strong>first towers</strong> in the lane is destroyed, it <strong>disappears</strong>.</p>",
  "spawn.info.baltoy.lane_910":
    "<p>Starts spawning at <strong>9:10</strong>.</p><p>When defeated, grants <strong>2 points</strong>. <strong>Respawns after 60 seconds</strong>.</p><p>If either of the <strong>first towers</strong> in the lane is destroyed, it <strong>disappears</strong>.</p>",
  "spawn.info.baltoy.lane_910_only":
    "<p>Starts spawning at <strong>9:10</strong>.</p><p>When defeated, grants <strong>2 points</strong>. <strong>Respawns after 60 seconds</strong>.</p>",
  "spawn.info.baltoy.lane_840":
    "<p>Starts spawning at <strong>8:40</strong>.</p><p>When defeated, grants <strong>2 points</strong>. <strong>Respawns after 60 seconds</strong>.</p>",
  "spawn.info.baltoy.tower":
    "<p>Starts spawning when the corresponding <strong>first tower is destroyed</strong>.</p><p>When defeated, grants <strong>2 points</strong>. <strong>Respawns after 60 seconds</strong>.</p>",
  "spawn.info.regidrago":
    "<p>Spawns in the <strong>middle of the map at 8:00</strong>. When killed, <strong>Altaria spawn instead 1:30 minute after</strong>.<br>The team that defeats <strong>Regidrago</strong> gains <strong>experience for all teammates</strong>.<br>The player who lands the killing blow receives a <strong>scoring-speed buff</strong> and <strong>20 points</strong>.</p>",
  "spawn.info.regieleki":
    "<p>Spawns at <strong>7:00</strong> on a random lane between <strong>toplane and botlane</strong>.<br>When defeated, goes to the base of the opposing team and if it touches the base, scores <strong>20/16/12/8 points</strong> and if the base is still alive, makes <strong>any goal become instant during 20/15/10/5s</strong>.<br>The player who lands the killing blow receives <strong>20 points</strong>.<br>Respawns <strong>2 minutes</strong> after death.</p>",
  "spawn.info.regi.700":
    "<p>Spawns at <strong>7:00</strong>.</p>",
  "spawn.info.xatu":
    "<p>Spawns at <strong>9:59</strong>.</p><p>Grants <strong>a large amount of experience</strong> and <strong>2 points</strong> when defeated.</p><p><strong>Does not respawn</strong>.</p>",
  "spawn.info.natu.900":
    "<p>Spawns at <strong>9:00</strong>.</p>",
  "spawn.info.natu.920":
    "<p>Spawns at <strong>9:20</strong>.</p>",
  "spawn.info.indeedee.lane":
    "<p>Starts spawning at <strong>9:30</strong> / <strong>9:35</strong>.</p><p>When defeated, <strong>respawns after 60 seconds</strong> and grants <strong>5 points</strong>.</p><p>If either of the <strong>first towers</strong> in the lane is destroyed, it <strong>disappears</strong>.</p>",
  "spawn.info.indeedee.tower":
    "<p>Spawns when the corresponding <strong>first tower</strong> is destroyed.</p><p>When defeated, <strong>respawns after 60 seconds</strong> and grants <strong>5 points</strong>.</p>",
  "spawn.info.salac":
    "<p>When consumed, grants a <strong>movement speed bonus</strong> for <strong>3 seconds</strong>.</p><p>Starts spawning at <strong>8:30</strong> and respawns <strong>60 seconds</strong> after being consumed.</p>",
  "spawn.info.salac.short":
    "<p>Movement speed bonus for 3 seconds.</p>",
  "spawn.info.altaria.after_regidrago":
    "<p>Starts spawning <strong>mid 1:30 after Regidrago is killed</strong>.</p>",
  "spawn.info.altaria.rayquaza":
    "<p>Spawn at <strong>8:00</strong> and respawn every <strong>1:30</strong>.</p><p>Disappears at <strong>2:30</strong>.</p>",
  "spawn.info.kyogre.boss":
    "<p>When defeated, all team members alive receive a <strong>buff</strong>, <strong>15 aeos points</strong> and all opponents' towers still up are disabled for 1:30 (opponent can't receive shield and regen).<br>This buff is <strong>permanent until the holder is KO'd</strong>. When the holder is <strong>KO'd</strong>, the buff <strong>transfers to the killer</strong>.<br>It provides a <strong>goal-scoring speed boost</strong>, <strong>self regen (5% per second)</strong>, and a <strong>small shield</strong>.<br>Always spawn at 2:00.</p>",
  "spawn.info.rayquaza.boss":
    "<p>When defeated, grants the winning team <strong>15 aeos points</strong>, a <strong>shield</strong> that <strong>speeds up goal scoring</strong> and <strong>prevents goals from being blocked</strong>.<br>Always spawns at 2:00.</p>",
  "spawn.info.regidrago.kyogre":
    "<p>Spawns in the <strong>middle of the map at 8:00</strong>.</p>",
  "spawn.info.xatu.short":
    "<p>Spawns at <strong>9:59</strong>.</p>",
  "spawn.info.indeedee.tower_break":
    "<p>Tower break spawn.</p>",
  "spawn.info.baltoy.tower_break":
    "<p>Tower break spawn.</p>",
  "spawn.info.bunnelby.lane":
    "<p>Starts spawning at <strong>9:40</strong>.</p>",
  "spawn.info.bunnelby.lane_920_short":
    "<p>Starts spawning at <strong>9:20</strong>.</p>",
  "spawn.info.bunnelby.lane_915_short":
    "<p>Starts spawning at <strong>9:15</strong>.</p>",
  "spawn.info.baltoy.lane_940_short":
    "<p>Starts spawning at <strong>9:40</strong>.</p>",
  "spawn.info.baltoy.945_short":
    "<p>Starts spawning at <strong>9:45</strong>.</p>",
  "spawn.info.baltoy.lane_910_short":
    "<p>Starts spawning at <strong>9:10</strong>.</p>",
  "spawn.info.baltoy.lane_840_short":
    "<p>Starts spawning at <strong>8:40</strong>.</p>",
  "spawn.info.indeedee.lane_930":
    "<p>Starts spawning at <strong>9:30</strong>.</p>",
  "spawn.info.indeedee.lane_935":
    "<p>Starts spawning at <strong>9:35</strong>.</p>",
  "spawn.info.bunnelby.points":
    "<p>Give 2 points.</p>",
  "spawn.info.baltoy.tower_kyogre":
    "<p>Starts spawning when the corresponding <strong>first tower is destroyed</strong>.</p>",
  "spawn.info.indeedee.tower_short":
    "<p>Spawns when the corresponding <strong>first tower</strong> is destroyed.</p>",
});

export default names;
