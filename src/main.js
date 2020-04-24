import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		colors : [
			{txt: "rouge",  code: "red",    id:0},
			{txt: "vert",   code: "green",  id:1},
			{txt: "bleu",   code: "blue",   id:2},
			{txt: "orange", code: "orange", id:3},
			{txt: "brun",   code: "brown",  id:4},
			{txt: "gris",   code: "gray",   id:5}
		]
	}
});

export default app;