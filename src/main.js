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
				{txt: "violet", code: "violet",  id:8},
			],
			nl : [
				{txt: "rooode",  code: "red",     id:0},
				{txt: "vaaart",   code: "green",   id:1},
				{txt: "blaawwww",   code: "blue",    id:2},
				{txt: "orange", code: "orange",  id:3},
				{txt: "bruuuuuun",   code: "brown",   id:4},
				{txt: "greyyuuys",   code: "gray",    id:5},
				{txt: "jaune",  code: "yellow",  id:6},
				{txt: "rose",   code: "hotpink", id:7},
				{txt: "violet", code: "violet",  id:8},
			],
			de : [
				{txt: "rouge",  code: "red",     id:0},
				{txt: "vert",   code: "green",   id:1},
				{txt: "bleu",   code: "blue",    id:2},
				{txt: "orange", code: "orange",  id:3},
				{txt: "brun",   code: "brown",   id:4},
				{txt: "gris",   code: "gray",    id:5},
				{txt: "jaune",  code: "yellow",  id:6},
				{txt: "rose",   code: "hotpink", id:7},
				{txt: "violet", code: "violet",  id:8},
			],
			en : [
				{txt: "rouge",  code: "red",     id:0},
				{txt: "vert",   code: "green",   id:1},
				{txt: "bleu",   code: "blue",    id:2},
				{txt: "orange", code: "orange",  id:3},
				{txt: "brun",   code: "brown",   id:4},
				{txt: "gris",   code: "gray",    id:5},
				{txt: "jaune",  code: "yellow",  id:6},
				{txt: "rose",   code: "hotpink", id:7},
				{txt: "violet", code: "violet",  id:8},
			],
		},
		translations : {
			fr: {
				startGame: '<p>Démarrer ou arrêter le jeu :<br><button class="big">Play<br>Stop</button></p>',
				instructions: '<p>Choix des couleurs :<br><button>A</button>&nbsp;<button>B</button>&nbsp;<button>C</button>&nbsp;<button>D</button></p>',
				true: "Correct !",
				false: "Faux !",
				timeElapsed: "Dommage,<br>votre temps est écoulé !"
			},
			nl: {
				startGame: '<p>Démarrer ou arrêter le jeu :<br><button class="big">Play<br>Stop</button></p>',
				instructions: '<p>Choix des couleurs :<br><button>A</button>&nbsp;<button>B</button>&nbsp;<button>C</button>&nbsp;<button>D</button></p>',
				true: "Correct !",
				false: "Faux !",
				timeElapsed: "NL Dommage,<br>votre temps est écoulé !"
			},
			de: {
				startGame: '<p>Démarrer ou arrêter le jeu :<br><button class="big">Play<br>Stop</button></p>',
				instructions: '<p>Choix des couleurs :<br><button>A</button>&nbsp;<button>B</button>&nbsp;<button>C</button>&nbsp;<button>D</button></p>',
				true: "Correct !",
				false: "Faux !",
				timeElapsed: "DE Dommage,<br>votre temps est écoulé !"
			},
			en: {
				startGame: '<p>Démarrer ou arrêter le jeu :<br><button class="big">Play<br>Stop</button></p>',
				instructions: '<p>Choix des couleurs :<br><button>A</button>&nbsp;<button>B</button>&nbsp;<button>C</button>&nbsp;<button>D</button></p>',
				true: "Correct !",
				false: "Faux !",
				timeElapsed: "Dommage,<br>votre temps est écoulé !"
			}
		}
	}
});

export default app;