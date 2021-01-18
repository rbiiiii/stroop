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
			]
		},
		translations : {
			fr: {
				startGame: '<p><code class="big">Play<br>Stop</code><br>démarrer ou arrêter le jeu</p>',
				instructions: '<p>ensuite utilisez les touches :<br><code>A</code>, <code>B</code>, <code>C</code>, <code>D</code> <strong>(joueur 1)</strong><br><code>A</code>, <code>B</code>, <code>C</code>, <code>D</code> <strong>(joueur 2)</strong><br>pour choisir la bonne couleur.</p>',
				true: "Correct !",
				false: "Faux !"
			},
			nl: {
				startGame: 'NL<p><code class="big">Play<br>Stop</code><br>démarrer ou arrêter le jeu</p>',
				instructions: '<p>ensuite utilisez les touches :<br><code>A</code>, <code>B</code>, <code>C</code>, <code>D</code> <strong>(joueur 1)</strong><br><code>A</code>, <code>B</code>, <code>C</code>, <code>D</code> <strong>(joueur 2)</strong><br>pour choisir la bonne couleur.</p>'
			},
			de: {
				startGame: 'DE<p><code class="big">Play<br>Stop</code><br>démarrer ou arrêter le jeu</p>',
				instructions: '<p>ensuite utilisez les touches :<br><code>A</code>, <code>B</code>, <code>C</code>, <code>D</code> <strong>(joueur 1)</strong><br><code>A</code>, <code>B</code>, <code>C</code>, <code>D</code> <strong>(joueur 2)</strong><br>pour choisir la bonne couleur.</p>'
			},
			en: {
				startGame: 'ENp><code class="big">Play<br>Stop</code><br>démarrer ou arrêter le jeu</p>',
				instructions: '<p>ensuite utilisez les touches :<br><code>A</code>, <code>B</code>, <code>C</code>, <code>D</code> <strong>(joueur 1)</strong><br><code>A</code>, <code>B</code>, <code>C</code>, <code>D</code> <strong>(joueur 2)</strong><br>pour choisir la bonne couleur.</p>'
			}
		}
	}
});

export default app;