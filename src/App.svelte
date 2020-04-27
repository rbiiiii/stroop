<script>
	import Board from "./Board.svelte";
	import {fade, fly} from "svelte/transition";

	export let colors;

	let currentState = false;
	let score = 0;
	let scoreOne = 0;
	let scoreTwo = 0;
	let round = 0;
  	const maxRound = 20;
	let response = false;
	const maxTimer = 5;
  	let timerActivated = true;
	let timerStatus = maxTimer;
	let timerInterval = null;
	let showTimeElapsedAlert = false;
	let showFinalScore = false;
	let showResponse = false;
	let key = '';
	let keyCode = '';
	
	let shuffleArray = (array) => {
		var currentIndex = array.length, temporaryValue, randomIndex;
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}

    let startGame = () => {
		round = 0;
		score = 0;
        if (!currentState) {
            currentState = true;
			round +=1;
			restartGame();
		} else {
			round = 0;
			window.clearInterval(timerInterval);
			restartGame();
		}
	}

	let restartGame = () => {
		showFinalScore = false;
		colors = shuffleArray(colors);
		timerStatus = maxTimer;
		window.clearInterval(timerInterval);
		if (currentState) {
			showFinalScore = false;
			if (timerActivated) {timerInterval = setInterval(updateTimer, 1000);}
		}
	}

	let timeElapsed = () => {
		showTimeElapsedAlert = true;
		window.clearInterval(timerInterval);
		setTimeout(function(){ 
			if (round < maxRound) {
				round += 1;
				showTimeElapsedAlert = false;
				restartGame();
			} else {
				showTimeElapsedAlert = false;
				gamefinished();
			}
		}, 2000);
	}

	let updateTimer = () => {
		timerStatus -= 1;
		if (timerStatus == 0) {
			timeElapsed();
		}
	}

	let gamefinished = () => {
		window.clearInterval(timerInterval);
		showFinalScore = true;
		currentState = false;
	}
	
	let updateGameStatus = function(e) {
		score = e.detail.score;
		scoreOne = e.detail.scoreOne;
		scoreTwo = e.detail.scoreTwo;
		round = e.detail.round;
		response = e.detail.response;
		showResponse = true;

		if (round > maxRound) {
			showResponse = false;
			gamefinished();
		} else {
			setTimeout(function(){ 
				showResponse = false;
				
				restartGame();
			}, 500);
		}
	}

	function handleKeydown(e) {
		key = e.key;
		keyCode = e.keyCode;

		// ENTER
		if (keyCode == 13) {
			startGame();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<main>

	<h1>Effet Stroop</h1>

	<!-- debug key : {key}, {keyCode} -->

	{#if showFinalScore}
		<div
			class="final-score"
			in:fly="{{ y: 20, duration: 300 }}" 
  			out:fly="{{ y: 20, duration: 150 }}">
				{#if scoreOne > scoreTwo}
					<h2>Joueur 1 gagne !</h2>
					<h2>Votre score est de : <strong>{scoreOne}/{maxRound}</strong></h2>
					<h2>Le score du joueur 2 est de : <strong>{scoreTwo}/{maxRound}</strong></h2>
					{:else}
						<h2>Joueur 2 gagne !</h2>
						<h2>Votre score est de : <strong>{scoreTwo}/{maxRound}</strong></h2>
						<h2>Le score du joueur 1 est de : <strong>{scoreOne}/{maxRound}</strong></h2>
				{/if}
		</div>
	{/if}

	{#if !currentState}
		<p>Appuyez sur ENTER pour démarrer le jeu,</p>
		<p>ensuite utilisez les touches :<br> <strong>A, Z, E, R (joueur 1)</strong><br><strong>U, I, O, P (joueur 2)</strong><br>pour choisir la bonne couleur.</p>
	{/if}

	{#if showResponse}
		<div class="show-response game-alert">
			<div
			  	in:fly="{{ y: 20, duration: 300 }}" 
  				out:fly="{{ y: 20, duration: 150 }}">
					<p>{response ? "Correct !" : "Faux !"}</p>
			</div>
		</div>
	{/if}

  {#if showTimeElapsedAlert}
    <div class="show-time-elapsed game-alert">
      <div
        in:fly="{{ y: 40, duration: 300 }}" 
          out:fly="{{ y: 40, duration: 150 }}">
          <p>Dommage, votre temps est écoulé !</p>
      </div>
    </div>
  {/if}
	
	<div class="game-controls">
		{#if currentState}
			<div transition:fade>
					<div class="status">
						<span class="score"
							on:colorBlockClicked={updateGameStatus}>
							Score joueur 1 : <strong>{scoreOne}</strong> / 
							Score joueur 2 : <strong>{scoreTwo}</strong> / 
						</span>
						/ Partie : <strong>{round}</strong>
						/ Temps restant : <strong>{timerStatus}</strong>
					</div>
			</div>
		{/if}
	</div>

	{#if currentState}
		<div transition:fade>
			{scoreOne} / {scoreTwo}
			<Board
				{colors}
				{score}
				{scoreOne}
				{scoreTwo}
				{round}
				on:colorBlockClicked={updateGameStatus}
			/>
		</div>
	{/if}

</main>

<style>
	body {
		overflow:hidden;
	}
	
	main {
		text-align: center;
		display: grid;
		place-items:center;
		padding: 1em;
		margin: 0 auto;
		max-width: 90%;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	.status {
		margin-top:20px;
	}
	.game-alert {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background:#eee;
		font-size: 3rem;
		opacity: 0.7;
		z-index: 2;
	}
</style>