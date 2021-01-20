<script>
	import Board from "./Board.svelte";
	import FinalScore from "./FinalScore.svelte";
	import GameStatus from "./GameStatus.svelte";
	import Header from "./Header.svelte";
	import LanguageSelector from "./LanguageSelector.svelte";
	import TimeElapsedAlert from "./TimeElapsedAlert.svelte";

	import { shuffleArray, openFullscreen } from './Utils.svelte';
	import {fade, fly} from "svelte/transition";

	export let colors;
	export let translations;

	let languageSelected = false;
	let currentLang = "fr";
	let currentColors = null;
	let currentState = false;
	let canTrigger = false;
	let scoreOne = 0;
	let scoreTwo = 0;
	let round = 0;
	let response = false;
	let key = '';
	let keyCode = '';
	let timerActivated = true;
	let timerStatus = timerMaxTime;
	let timerInterval = null;
	let timerFontSize = timerInitialFontSize;
	let showTimeElapsedAlert = false;
	let showFinalScore = false;
	let showResponse = false;

	const maxRound = 20;
	const timerMaxTime = 4;
	const timerInitialFontSize = 3;
	const body = document.body;
	const soundBip = new Audio('./mp3/beep.mp3');
	const soundTimeElapsed = new Audio('./mp3/time-elapsed.mp3');
	const soundEndGame = new Audio('./mp3/end-game.mp3');

	$: document.documentElement.style.setProperty('--timerFontSize', timerFontSize + 'rem');
	
	const getTranslationText = (text) => {
		return translations[currentLang][text];
	}

	const updateCurrentLang = function(e) {
		currentLang = e.detail.currentLang;
		if (!languageSelected) {languageSelected = true}
	}

    const startGame = () => {
		canTrigger = true;
		soundEndGame.pause();
		soundEndGame.currentTime = 0;
		round = 0;
		scoreOne = 0;
		scoreTwo = 0;
		timerFontSize = timerInitialFontSize;
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

	const restartGame = () => {
		showFinalScore = false;
		currentColors = shuffleArray(colors[currentLang]);
		timerStatus = timerMaxTime;
		timerFontSize = timerInitialFontSize;
		window.clearInterval(timerInterval);
		if (currentState) {
			showFinalScore = false;
			if (timerActivated) {timerInterval = setInterval(updateTimer, 1000);}
		}
	}

	const timeElapsed = () => {
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

	const updateTimer = () => {
		timerStatus -= 1;
		timerFontSize += 1.5;
		soundTimeElapsed.pause();
		soundTimeElapsed.currentTime = 0;
		if (timerStatus == 0 && canTrigger) {
			soundTimeElapsed.play();
			timeElapsed();
		} else {
			soundBip.play();
		}
	}

	const gamefinished = (isSound) => {
		if (isSound) {soundEndGame.play()};
		window.clearInterval(timerInterval);
		showFinalScore = true;
		currentState = false;
	}
	
	const updateGameStatus = function(e) {
		scoreOne = e.detail.scoreOne;
		scoreTwo = e.detail.scoreTwo;
		round = e.detail.round;
		response = e.detail.response;
		canTrigger = e.canTrigger;
		showResponse = true;
		timerFontSize = timerInitialFontSize;

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

	const handleKeydown = (e) => {
		key = e.key;
		keyCode = e.keyCode;

		// ENTER
		if (keyCode == 13 && languageSelected) {
			if (currentState) {
				gamefinished(true);
			} else {
				startGame();
			}
		}

		// L
		if (keyCode == 76) {
			gamefinished(false);
			restartGame();
			languageSelected = false;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<main>

	{#if !languageSelected}
		<Header />
		<LanguageSelector
			on:languageSelection={updateCurrentLang}
		/>
	{/if}

	{#if languageSelected}
		{#if !currentState}
			<Header />
		{/if}

		{#if showFinalScore}
			<FinalScore 
				{scoreOne}
				{scoreTwo}
			/>
		{/if}

		{#if !currentState}
			<div class="instructions">
				{@html getTranslationText("startGame")}
				{@html getTranslationText("instructions")}
			</div>
		{/if}

		{#if showResponse}
			<div class="show-response game-alert">
				<div
					in:fly="{{ y: 20, duration: 300 }}" 
					out:fly="{{ y: 20, duration: 150 }}">
						<p>{response ? getTranslationText("true") : getTranslationText("false")}</p>
				</div>
			</div>
		{/if}

		{#if showTimeElapsedAlert}
			<TimeElapsedAlert 
				{getTranslationText}
			/>
		{/if}

		{#if currentState}
			<GameStatus
				{scoreOne}
				{scoreTwo}
				{round}
				{maxRound}
				{timerStatus}
			/>
			<div transition:fade>
				<Board
					{currentColors}
					{scoreOne}
					{scoreTwo}
					{round}
					{canTrigger}
					on:colorBlockClicked={updateGameStatus}
				/>
			</div>
		{/if}
	{/if}
</main>