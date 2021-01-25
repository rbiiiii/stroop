<script>
	import Board from "./Board.svelte";
	import FinalScore from "./FinalScore.svelte";
	import GameStatus from "./GameStatus.svelte";
	import Header from "./Header.svelte";
	import Instructions from "./Instructions.svelte";
	import LanguageSelector from "./LanguageSelector.svelte";
	import ShowResponse from "./ShowResponse.svelte";
	import TimeElapsedAlert from "./TimeElapsedAlert.svelte";

	import { getKeyCodes, openFullscreen, shuffleArray  } from './Utils.svelte';
	import { fade } from "svelte/transition";

	export let colors;
	export let translations;

	let currentLang = "fr";
	let currentColors = null;
	let currentState = false;
	let canTrigger = false;
	let keyCode = '';
	let languageSelected = false;
	let round = 0;
	let response = false;
	let scoreOne = 0;
	let scoreTwo = 0;
	let showTimeElapsedAlert = false;
	let showFinalScore = false;
	let showResponse = false;
	let timerActivated = true;
	let timerStatus = timerMaxTime;
	let timerInterval = null;
	let timerFontSize = timerInitialFontSize;

	const body = document.body;
	const keyCodes = getKeyCodes();
    const keyCodeStartStop = keyCodes.startStop;
    const keyCodeLang = keyCodes.lang;
	const maxRound = 20;
	const soundBeep = new Audio('./mp3/beep.mp3');
	const soundBlip = new Audio('./mp3/blip.mp3');
	const soundEndGame = new Audio('./mp3/end-game.mp3');
	const soundError = new Audio('./mp3/error.mp3');
	const soundTimeElapsed = new Audio('./mp3/time-elapsed.mp3');
	const timerMaxTime = 4;
	const timerInitialFontSize = 3;

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
		if (currentState && timerActivated) {
			timerInterval = setInterval(updateTimer, 1000);
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
				gamefinished(true);
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
			soundBeep.play();
		}
	}

	const gamefinished = (isSound) => {
		if (isSound) {soundEndGame.play()};
		window.clearInterval(timerInterval);
		showFinalScore = true;
		currentState = false;
		canTrigger = false;
	}
	
	const updateGameStatus = function(e) {
		scoreOne = e.detail.scoreOne;
		scoreTwo = e.detail.scoreTwo;
		round = e.detail.round;
		response = e.detail.response;
		canTrigger = e.detail.canTrigger;
		showResponse = true;
		timerFontSize = timerInitialFontSize;

		if (round > maxRound) {
			showResponse = false;
			gamefinished(true);
		} else {
			setTimeout(function(){ 
				showResponse = false;
				canTrigger = true;
				restartGame();
			}, 500);
		}
	}

	const handleKeydown = (e) => {
		keyCode = e.keyCode;

		if (keyCode == keyCodeStartStop && languageSelected) {
			if (currentState) {
				gamefinished(true);
			} else {
				soundBlip.play();
				startGame();
			}
		}
		
		if (keyCode == keyCodeLang) {
			soundBlip.play();
			languageSelected = false;
			gamefinished(false);
			restartGame();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<main>

	{#if !languageSelected}
		<Header />
		<LanguageSelector
			{soundBlip}
			{soundError}
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
				{getTranslationText}
			/>
		{/if}

		{#if !currentState}
			<Instructions 
				{getTranslationText}
			/>
		{/if}

		{#if showResponse}
			<ShowResponse 
				{response}
				{getTranslationText}
			/>
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
				{getTranslationText}
			/>
			<div transition:fade>
				<Board
					{currentColors}
					{scoreOne}
					{scoreTwo}
					{round}
					{canTrigger}
					{getTranslationText}
					on:colorBlockClicked={updateGameStatus}
				/>
			</div>
		{/if}
	{/if}
</main>