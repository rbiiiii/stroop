import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		colors : {
			fr : [
				{txt: "rouge",  code: "red",     id:0},
				{txt: "vert",   code: "green",   id:1},
				{txt: "bleu",   code: "blue",    id:2},
				{txt: "orange", code: "orange",  id:3},
				{txt: "brun",   code: "brown",   id:4},
				{txt: "gris",   code: "gray",    id:5},
				{txt: "jaune",  code: "yellow",  id:6},
				{txt: "rose",   code: "hotpink", id:7},
				{txt: "violet", code: "purple",  id:8},
			],
			nl : [
				{txt: "rood",   code: "red",     id:0},
				{txt: "groene", code: "green",   id:1},
				{txt: "blauw",  code: "blue",    id:2},
				{txt: "oranje", code: "orange",  id:3},
				{txt: "bruine", code: "brown",   id:4},
				{txt: "grijs",  code: "gray",    id:5},
				{txt: "geel",   code: "yellow",  id:6},
				{txt: "roze",   code: "hotpink", id:7},
				{txt: "paars",  code: "purple",  id:8},
			],
			de : [
				{txt: "rot",    code: "red",     id:0},
				{txt: "grün",   code: "green",   id:1},
				{txt: "blau",   code: "blue",    id:2},
				{txt: "orange", code: "orange",  id:3},
				{txt: "braun",  code: "brown",   id:4},
				{txt: "grau",   code: "gray",    id:5},
				{txt: "gelb",   code: "yellow",  id:6},
				{txt: "rosa",   code: "hotpink", id:7},
				{txt: "lila",   code: "purple",  id:8},
			],
			en : [
				{txt: "red",    code: "red",     id:0},
				{txt: "green",  code: "green",   id:1},
				{txt: "blue",   code: "blue",    id:2},
				{txt: "orange", code: "orange",  id:3},
				{txt: "brown",  code: "brown",   id:4},
				{txt: "gray",   code: "gray",    id:5},
				{txt: "yellow", code: "yellow",  id:6},
				{txt: "pink",   code: "hotpink", id:7},
				{txt: "purple", code: "purple",  id:8},
			],
		},
		translations : {
			fr: {
				startGame: 'Démarrer ou arrêter le jeu :',
				instructions: 'Choix des couleurs :',
				true: "Correct !",
				false: "Faux !",
				timeElapsed: "Dommage,<br>votre temps est écoulé !",
				playerOne: "Joueur 1",
				playerTwo: "Joueur 2",
				playerOneWins: "Joueur 1 gagne !",
				playerTwoWins: "Joueur 2 gagne !",
				tieGame: "Egalité",
				finalScore: "Score final",
				score: "Score",
				remainingTime: "Temps restant",
				game: "Partie"
			},
			nl: {
				startGame: 'Start of stop het spel :',
				instructions: 'Kleurenselectie :',
				true: "Correct!",
				false: "Verkeerd!",
				timeElapsed: "Jammer,<br>je tijd is om!",
				playerOne: "Speler 1",
				playerTwo: "Speler 2",
				playerOneWins: "Speler 1 wint!",
				playerTwoWins: "Speler 2 wint!",
				tieGame: "Gelijkspel",
				finalScore: "Eindscore",
				score: "Score",
				remainingTime: "Resterende tijd",
				game: "Ronde"
			},
			de: {
				startGame: 'Das Spiel starten oder stoppen :',
				instructions: 'Farbauswahl :',
				true: "Richtig!",
				false: "Falsch!",
				timeElapsed: "Schade,<br>Ihre Zeit ist um!",
				playerOne: "Spieler 1",
				playerTwo: "Spieler 2",
				playerOneWins: "Spieler 1 gewinnt!",
				playerTwoWins: "Spieler 2 gewinnt!",
				tieGame: "Gleichstand",
				finalScore: "Endstand",
				score: "Punktzahl",
				remainingTime: "Verbleibende Zeit",
				game: "Spiel"
			},
			en: {
				startGame: 'Start or stop the game:',
				instructions: 'Colour selection:',
				true: "Right!",
				false: "Wrong!",
				timeElapsed: "Too bad,<br> your time is up!",
				playerOne: "Player 1",
				playerTwo: "Player 2",
				playerOneWins: "Player 1 wins !",
				playerTwoWins: "Player 2 wins !",
				tieGame: "Tie",
				finalScore: "Final score",
				score: "Score",
				remainingTime: "Time remaining ",
				game: "Round"
			}
		}
	}
});

export default app;