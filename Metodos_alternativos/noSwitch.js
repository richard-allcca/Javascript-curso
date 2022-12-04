const GAME_OPTIONS = [ "PIEDRA", "PAPEL", "TIJERA" ];

// NOTE - dentro de cada primer elemento del "GAME_RULES" solo le pasamos una propiedad debido a que por defecto otra opcion es falsa

const GAME_RULES = {
   PIEDRA: {
      TIJERA: true
   },
   PAPEL: {
      PIEDRA: true
   },
   TIJERA: {
      PAPEL: true
   }
}


function game(player1, player2) {
   if (!GAME_OPTIONS.includes(player1) | !GAME_OPTIONS.includes(player2)) {
      throw new Error('Opción de juego no válida');
   }

   if (player1 === player2) return 'Empate';

   // NOTE - si el valor de player1 y "player2" es true, gana el 1 pero si alguno es "false" entonces gana el 2
   return GAME_RULES[ player1 ][ player2 ] ? 'Player1 gana' : 'Player2 gana';
}

console.log(game('PAPEL', 'TIJERA')) // Player2 gana


// =================================================

const adversario = 'Iron-man';

const LOKI_DISFRACES = {
   'Iron-man': 'Magneto',
   Thor: 'Odin',
   hulk: 'Thanos'
}

const LOKI_DEFAULT = 'Loki';

const loki = LOKI_DISFRACES[ adversario ] || LOKI_DEFAULT;

console.log(loki);
