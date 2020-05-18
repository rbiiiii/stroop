<script>
	import Board from "./Board.svelte";
	import {fade, fly} from "svelte/transition";

	export let colors;

	let currentState = false;
	let canTrigger = false;
	let scoreOne = 0;
	let scoreTwo = 0;
	let round = 0;
  	const maxRound = 20;
	let response = false;
	let key = '';
	let keyCode = '';
  	let timerActivated = true;
	let timerStatus = maxTimer;
	let timerInterval = null;
	let timerFontSize = 3;
	const maxTimer = 5;
	let showTimeElapsedAlert = false;
	let showFinalScore = false;
	let showResponse = false;
	const body = document.body;
	const bipSound = new Audio('./mp3/beep-07.mp3');
	const explosionSound = new Audio('./mp3/explosion-01.mp3');
	const victorySound = new Audio('./mp3/victory-sound-effect-hd.mp3');

	$: document.documentElement.style.setProperty('--timerFontSize', timerFontSize + 'rem');

	
	const openFullscreen = (dom) => {
		if (dom.requestFullscreen) {
			dom.requestFullscreen();
		} else if (dom.mozRequestFullScreen) { /* Firefox */
			dom.mozRequestFullScreen();
		} else if (dom.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
			dom.webkitRequestFullscreen();
		} else if (dom.msRequestFullscreen) { /* IE/Edge */
			dom.msRequestFullscreen();
		}
	}
	
	let shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

    let startGame = () => {
		canTrigger = true;
		victorySound.pause();
		victorySound.currentTime = 0;
		round = 0;
		scoreOne = 0;
		scoreTwo = 0;
		timerFontSize = 2;
		openFullscreen(body);
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
		timerFontSize = 2;
		window.clearInterval(timerInterval);
		if (currentState) {
			showFinalScore = false;
			if (timerActivated) {timerInterval = setInterval(updateTimer, 1000);}
		}
	}

	let timeElapsed = () => {
		canTrigger = false;
		showTimeElapsedAlert = true;
		window.clearInterval(timerInterval);
		setTimeout(function(){ 
			canTrigger = true;
			showTimeElapsedAlert = false;
			if (round < maxRound) {
				round += 1;
				restartGame();
			} else {
				gamefinished();
			}
		}, 700);
	}

	let updateTimer = () => {
		timerStatus -= 1;
		timerFontSize += 1.5;
		explosionSound.pause();
		explosionSound.currentTime = 0;
		if (timerStatus == 0 && canTrigger) {
			explosionSound.play();
			timeElapsed();
		} else {
			bipSound.play();
		}
	}

	let gamefinished = () => {
		victorySound.play();
		window.clearInterval(timerInterval);
		showFinalScore = true;
		currentState = false;
	}
	
	let updateGameStatus = function(e) {
		scoreOne = e.detail.scoreOne;
		scoreTwo = e.detail.scoreTwo;
		round = e.detail.round;
		response = e.detail.response;
		canTrigger = e.canTrigger;
		showResponse = true;
		timerFontSize = 2;

		if (round > maxRound) {
			showResponse = false;
			gamefinished();
		} else {
			setTimeout(function(){ 
				showResponse = false;
				canTrigger = true;
				restartGame();
			}, 500);
		}
	}

	function handleKeydown(e) {
		key = e.key;
		keyCode = e.keyCode;

		// ENTER
		if (keyCode == 13) {
			if (currentState) {
				gamefinished();
			} else {
				startGame();
			}
		}
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<main>

	{#if !currentState}
		<h1>
			<img src="img/title.svg" alt="">
			<span>E</span>
			<span>f</span>
			<span>f</span>
			<span>e</span>
			<span>t</span> 
			<span class="new-word">S</span>
			<span>t</span>
			<span>r</span>
			<span>o</span>
			<span>o</span>
			<span>p</span>
		</h1>
	{/if}

	{#if showFinalScore}
		<div
			class="final-score"
			in:fly="{{ y: 20, duration: 300 }}">
				{#if scoreOne > scoreTwo}
					<h2>Joueur 1 gagne !</h2>
					<h2>Score final : <strong>{scoreOne} - {scoreTwo}</strong></h2>
					{:else}
					{#if scoreOne == scoreTwo}
						<h2>Egalité !</h2>
						<h2>Score final : <strong>{scoreOne} - {scoreTwo}</strong></h2>
					{:else}
						{#if scoreOne < scoreTwo}
							<h2>Joueur 2 gagne !</h2>
							<h2>Score final : <strong>{scoreOne} - {scoreTwo}</strong></h2>
						{/if}
					{/if}
				{/if}
		</div>
	{/if}

	{#if !currentState}
		<div class="instructions">
			<p>Appuyez sur <code>ENTER</code> pour démarrer le jeu</p>
			<p>ensuite utilisez les touches :<br>
			<code>A</code>, <code>Z</code>, <code>E</code>, <code>R</code> <strong>(joueur 1)</strong><br>
			<code>U</code>, <code>I</code>, <code>O</code>, <code>P</code> <strong>(joueur 2)</strong><br>
			pour choisir la bonne couleur.</p>
		</div>
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
			<p>Dommage,<br>votre temps est écoulé !</p>
		</div>
	</div>
	{/if}
	
	{#if currentState}
		<div class="game-status"
		in:fly="{{ y: 20, duration: 300 }}">
			<div class="score">
				Score : <strong>{scoreOne}</strong> - <strong>{scoreTwo}</strong><br>
			</div>
			<div class="timer">
				Temps restant<br><strong class="timer-status">{timerStatus}</strong>	
			</div>
			<div class="round">
				Partie : <strong>{round} / {maxRound}</strong><br>
			</div>
		</div>
		<div transition:fade>
			<Board
				{colors}
				{scoreOne}
				{scoreTwo}
				{round}
				{canTrigger}
				on:colorBlockClicked={updateGameStatus}
			/>
		</div>
	{/if}

</main>

<style>
	main {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 80%;
		margin: 0 auto;
		padding: 1em;
	}
	h1 {
		text-align: center;
	}
	h1 span {
		display:inline-block;
		font-size: 6rem;
		color:white;
		font-weight: bold;
		animation: letter-anim 2.4s ease-out infinite;
		--letter-anim-duration : 0.1s;
	}
	h1 span:nth-of-type(1) {
		animation-delay: calc(1 * var(--letter-anim-duration));
	}
	h1 span:nth-of-type(2) {
		animation-delay: calc(2 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.94);
	}
	h1 span:nth-of-type(3) {
		animation-delay: calc(3 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.88);
	}
	h1 span:nth-of-type(4) {
		animation-delay: calc(4 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.82);
	}
	h1 span:nth-of-type(5) {
		animation-delay: calc(5 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.76);
	}
	h1 span:nth-of-type(6) {
		animation-delay: calc(6 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.94);
	}
	h1 span:nth-of-type(7) {
		animation-delay: calc(7 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.88);
	}
	h1 span:nth-of-type(8) {
		animation-delay: calc(8 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.82);
	}
	h1 span:nth-of-type(9) {
		animation-delay: calc(9 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.76);
	}
	h1 span:nth-of-type(10) {
		animation-delay: calc(10 * var(--letter-anim-duration));
		color:rgba(255, 255, 255, 0.7);
	}
	h1 span:nth-of-type(11) {
		animation-delay: calc(11 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.64);
	}
	h1 .new-word {
		margin-left:0.25em;
	}
	h1 img {
		display:block;
		width:490px;
		height:auto;
		margin:10px auto;
	}
	.instructions {
		font-size: 2rem;
	}
	.instructions strong {
		font-size: 85%;
	}
	.game-status {
		display:flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width:100%;
		margin-top:20px;
		font-size: 2rem;
	}
	.timer-status {
		position:absolute;
		left:50%;
		transform:translateX(-50%);
		font-size: var(--timerFontSize);
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
		margin: 0;
		padding: 0;
		font-size: 9rem;
		font-weight: bold;
		line-height: 1;
		background:rgba(173, 227, 224, 0.8);
		color: #951b81;
		z-index: 2;
	}
	.game-alert p {
		width: 100%;
		margin:0 auto;
	}
	.final-score {
		font-size:3rem;
		color:white;
	}
	.final-score h2 {
		margin:0;
	}
	code {
		display:inline-block;
		padding:0.15em 0.5em;
		background:white;
		border:2px solid var(--green);
		transform: translateY(-0.25em);
		margin: 0 0.5em;
		font-weight: normal;
		font-size: 1.4rem;
		border:1px solid gray;
		box-shadow:1px 0 1px 0 #eee, 0 2px 0 2px #ccc, 0 2px 0 3px #444;
		-webkit-border-radius:3px;
		-moz-border-radius:3px;
		border-radius:3px;
		margin:2px 3px;
		padding:1px 5px;
	}

	@keyframes letter-anim {
		0%   { transform:translateY(0px); }
		10%  { transform:translateY(-5px); }
		20% { transform:translateY(0px); }
		100% { transform:translateY(0px); }
	}
</style>