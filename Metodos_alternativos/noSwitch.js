// ===============================================
//  No Switch double
// ===============================================
function game(player1, player2) {
	const GAME_OPTIONS = ["PIEDRA", "PAPEL", "TIJERA"];

	// NOTE - cada primer elemento del "GAME_RULES" solo tiene una propiedad debido a que por defecto una 3° es falsa

	const GAME_RULES = {
		PIEDRA: {
			TIJERA: true,
		},
		PAPEL: {
			PIEDRA: true,
		},
		TIJERA: {
			PAPEL: true,
		},
	};

	if (!GAME_OPTIONS.includes(player1) | !GAME_OPTIONS.includes(player2)) {
		throw new Error("Opción de juego no válida");
	}

	if (player1 === player2) return "Empate";

	// NOTE -  El return busca el 2 nivales para llegar al true

	return GAME_RULES[player1][player2] ? "Player1 gana" : "Player2 gana";
}

console.log(game("PAPEL", "TIJERA")); // Player2 gana

// =================================================
//  No Switch sigle
// =================================================

const adversario = "Iron-man";

const noSwitch = (heroe) => {
	let hero = heroe.toLowerCase();

	const LOKI_DISFRACES = {
		"iron-man": "Magneto",
		thor: "Odin",
		hulk: "Thanos",
	};

	const LOKI_DEFAULT = "Loki";

	return LOKI_DISFRACES[hero] || LOKI_DEFAULT;
};

noSwitch(adversario);
console.log(
	"🚀 ~ file: Untitled-1:17 ~ noSwitch(adversario)",
	noSwitch(adversario)
);
