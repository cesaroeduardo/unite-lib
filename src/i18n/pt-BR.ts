import en from "./en";

/**
 * Portuguese (Brazil). Same as English for Pokémon names; override here only when pt-BR differs.
 */
const ptBR: Record<string, string> = {
  ...en,
  // Maps — names and descriptions
  "map-groudon": "Ruínas Celestes de Theia",
  "map-groudon.description": "Mapa 5v5 com Groudon.",
  "map-kyogre": "Ruínas Celestes de Theia",
  "map-kyogre.description": "Mapa 5v5 com Kyogre.",
  "map-rayquaza": "Ruínas Celestes de Theia",
  "map-rayquaza.description": "Mapa 5v5 com Rayquaza.",
  // Spawn info (HTML) — principais textos; demais usam fallback en
  "spawn.info.groudon.boss":
    "<p>Ao ser derrotado, todos os membros vivos do time recebem <strong>buff</strong> e <strong>15 pontos aeos</strong>.<br>O buff é <strong>permanente até o portador ser nocauteado</strong>. Ao ser nocauteado, o buff <strong>transfere para quem aplicou o KO</strong>.<br>Concede <strong>aumento de velocidade de pontuação</strong>, <strong>grande aumento de dano</strong> e <strong>pequeno escudo</strong>.<br>Sempre aparece às 2:00.</p>",
  "spawn.info.kyogre.boss":
    "<p>Ao ser derrotado, todos os membros vivos do time recebem <strong>buff</strong>, <strong>15 pontos aeos</strong> e as torres adversárias ainda de pé ficam desativadas por 1:30 (adversário não recebe escudo e regeneração).<br>O buff é <strong>permanente até o portador ser nocauteado</strong>. Ao ser nocauteado, o buff <strong>transfere para quem aplicou o KO</strong>.<br>Concede <strong>aumento de velocidade de pontuação</strong>, <strong>autorregeneração (5% por segundo)</strong> e <strong>pequeno escudo</strong>.<br>Sempre aparece às 2:00.</p>",
  "spawn.info.rayquaza.boss":
    "<p>Ao ser derrotado, concede ao time vencedor <strong>15 pontos aeos</strong>, um <strong>escudo</strong> que <strong>acelera a pontuação</strong> e <strong>impede que gols sejam bloqueados</strong>.<br>Sempre aparece às 2:00.</p>",
  "spawn.info.bunnelby.initial":
    "<p><strong>Aparecem no início da partida</strong> e <strong>não ressurgem</strong> após derrotados.</p><p>Dão 2 pontos.</p>",
  "spawn.info.bunnelby.points":
    "<p>Dão 2 pontos.</p>",
  "spawn.info.regi.700":
    "<p>Aparece às <strong>7:00</strong>.</p>",
  "spawn.info.bunnelby.lane_940":
    "<p>Começa a aparecer às <strong>9:40</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong> e ressurgem após <strong>60 segundos</strong>.</p><p>Se alguma das <strong>primeiras torres</strong> da lane for destruída, <strong>desaparece</strong>.</p>",
  "spawn.info.bunnelby.lane_920":
    "<p>Começa a aparecer às <strong>9:20</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong> e ressurgem após <strong>60 segundos</strong>.</p><p>Se alguma das <strong>primeiras torres</strong> da lane for destruída, <strong>desaparece</strong>.</p>",
  "spawn.info.bunnelby.lane_915":
    "<p>Começa a aparecer às <strong>9:15</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong> e ressurgem após <strong>60 segundos</strong>.</p><p>Se alguma das <strong>primeiras torres</strong> da lane for destruída, <strong>desaparece</strong>.</p>",
  "spawn.info.accelgor":
    "<p>Começa a aparecer às <strong>9:45</strong>.</p><p>Quando derrotado, concede <strong>4 / 7 pontos</strong> e um <strong>buff</strong>. <strong>Ressurge após 60 segundos</strong>.</p><p>O buff dura <strong>70 segundos</strong> e concede <strong>10% de redução no tempo de recarga dos movimentos</strong>.</p>",
  "spawn.info.escavalier":
    "<p>Começa a aparecer às <strong>9:45</strong>.</p><p>Quando derrotado, concede <strong>4 / 7 pontos</strong> e um <strong>buff</strong>. <strong>Ressurge após 60 segundos</strong>.</p><p>O buff dura <strong>70 segundos</strong> e concede <strong>dano extra em ataques básicos e reduz a velocidade de movimento do oponente por um curto tempo</strong>.</p>",
  "spawn.info.baltoy.generic":
    "<p>Começa a aparecer às <strong>9:45</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong>. <strong>Ressurge após 60 segundos</strong>.</p>",
  "spawn.info.baltoy.lane_940":
    "<p>Começa a aparecer às <strong>9:40</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong>. <strong>Ressurge após 60 segundos</strong>.</p><p>Se alguma das <strong>primeiras torres</strong> da lane for destruída, <strong>desaparece</strong>.</p>",
  "spawn.info.baltoy.lane_920":
    "<p>Começa a aparecer às <strong>9:40</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong>. <strong>Ressurge após 60 segundos</strong>.</p><p>Se alguma das <strong>primeiras torres</strong> da lane for destruída, <strong>desaparece</strong>.</p>",
  "spawn.info.baltoy.lane_910":
    "<p>Começa a aparecer às <strong>9:10</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong>. <strong>Ressurge após 60 segundos</strong>.</p><p>Se alguma das <strong>primeiras torres</strong> da lane for destruída, <strong>desaparece</strong>.</p>",
  "spawn.info.baltoy.lane_910_only":
    "<p>Começa a aparecer às <strong>9:10</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong>. <strong>Ressurge após 60 segundos</strong>.</p>",
  "spawn.info.baltoy.lane_840":
    "<p>Começa a aparecer às <strong>8:40</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong>. <strong>Ressurge após 60 segundos</strong>.</p>",
  "spawn.info.baltoy.tower":
    "<p>Começa a aparecer quando a <strong>primeira torre correspondente</strong> for destruída.</p><p>Quando derrotado, concede <strong>2 pontos</strong>. <strong>Ressurge após 60 segundos</strong>.</p>",
  "spawn.info.regidrago":
    "<p>Aparece no <strong>centro do mapa às 8:00</strong>. Quando derrotado, <strong>Altaria aparece 1:30 minuto depois</strong>.<br>O time que derrotar o <strong>Regidrago</strong> ganha <strong>experiência para todos os aliados</strong>.<br>Quem aplicar o golpe final recebe <strong>buff de velocidade de pontuação</strong> e <strong>20 pontos</strong>.</p>",
  "spawn.info.regieleki":
    "<p>Aparece às <strong>7:00</strong> em uma lane aleatória entre <strong>topo e base</strong>.<br>Quando derrotado, vai até a base do time adversário e, se tocar a base, pontua <strong>20/16/12/8 pontos</strong>; se a base ainda estiver de pé, <strong>gols ficam instantâneos por 20/15/10/5s</strong>.<br>Quem aplicar o golpe final recebe <strong>20 pontos</strong>.<br>Ressurge <strong>2 minutos</strong> após a morte.</p>",
  "spawn.info.xatu":
    "<p>Aparece às <strong>9:59</strong>.</p><p>Concede <strong>muita experiência</strong> e <strong>2 pontos</strong> quando derrotado.</p><p><strong>Não ressurgem</strong>.</p>",
  "spawn.info.natu.900":
    "<p>Aparece às <strong>9:00</strong>.</p>",
  "spawn.info.natu.920":
    "<p>Aparece às <strong>9:20</strong>.</p>",
  "spawn.info.indeedee.lane":
    "<p>Começa a aparecer às <strong>9:30</strong> / <strong>9:35</strong>.</p><p>Quando derrotado, <strong>ressurge após 60 segundos</strong> e concede <strong>5 pontos</strong>.</p><p>Se alguma das <strong>primeiras torres</strong> da lane for destruída, <strong>desaparece</strong>.</p>",
  "spawn.info.indeedee.tower":
    "<p>Aparece quando a <strong>primeira torre correspondente</strong> for destruída.</p><p>Quando derrotado, <strong>ressurge após 60 segundos</strong> e concede <strong>5 pontos</strong>.</p>",
  "spawn.info.salac":
    "<p>Quando consumido, concede <strong>bônus de velocidade de movimento</strong> por <strong>3 segundos</strong>.</p><p>Começa a aparecer às <strong>8:30</strong> e ressurgem <strong>60 segundos</strong> após o consumo.</p>",
  "spawn.info.salac.short":
    "<p>Bônus de velocidade de movimento por 3 segundos.</p>",
  "spawn.info.altaria.after_regidrago":
    "<p>Começa a aparecer <strong>1:30 após o Regidrago ser derrotado</strong>.</p>",
  "spawn.info.altaria.rayquaza":
    "<p>Aparece às <strong>8:00</strong> e resurge a cada <strong>1:30</strong>.</p><p>Desaparece às <strong>2:30</strong>.</p>",
  "spawn.info.regidrago.kyogre":
    "<p>Aparece no <strong>centro do mapa às 8:00</strong>.</p>",
  "spawn.info.xatu.short":
    "<p>Aparece às <strong>9:59</strong>.</p>",
  "spawn.info.indeedee.tower_break":
    "<p>Aparece quando torre é destruída.</p>",
  "spawn.info.baltoy.tower_break":
    "<p>Aparece quando torre é destruída.</p>",
  "spawn.info.bunnelby.lane":
    "<p>Começa a aparecer às <strong>9:40</strong>.</p>",
  "spawn.info.bunnelby.lane_920_short":
    "<p>Começa a aparecer às <strong>9:20</strong>.</p>",
  "spawn.info.bunnelby.lane_915_short":
    "<p>Começa a aparecer às <strong>9:15</strong>.</p>",
  "spawn.info.baltoy.lane_940_short":
    "<p>Começa a aparecer às <strong>9:40</strong>.</p>",
  "spawn.info.baltoy.945_short":
    "<p>Começa a aparecer às <strong>9:45</strong>.</p>",
  "spawn.info.baltoy.lane_910_short":
    "<p>Começa a aparecer às <strong>9:10</strong>.</p>",
  "spawn.info.baltoy.lane_840_short":
    "<p>Começa a aparecer às <strong>8:40</strong>.</p>",
  "spawn.info.indeedee.lane_930":
    "<p>Começa a aparecer às <strong>9:30</strong>.</p>",
  "spawn.info.indeedee.lane_935":
    "<p>Começa a aparecer às <strong>9:35</strong>.</p>",
  "spawn.info.baltoy.tower_kyogre":
    "<p>Começa a aparecer quando a <strong>primeira torre correspondente</strong> for destruída.</p>",
  "spawn.info.indeedee.tower_short":
    "<p>Aparece quando a <strong>primeira torre correspondente</strong> for destruída.</p>",
};

export default ptBR;
