<script>
    import {fly} from "svelte/transition";

    export let scoreOne;
    export let scoreTwo;
    export let timerStatus;
    export let round;
    export let maxRound;
    export let getTranslationText;

</script>

<section class="game-status"
    in:fly="{{ y: 20, duration: 300 }}" 
    out:fly="{{ y: 0, duration: 0 }}">
        <div class="score">
            {getTranslationText("score")}<br><strong>{scoreOne}</strong> - <strong>{scoreTwo}</strong><br>
        </div>
        <div class="timer">
            {getTranslationText("remainingTime")}<br><strong class="timer-status">{timerStatus}</strong>	
        </div>
        <div class="round">
            {getTranslationText("game")}<br><strong>{round} / {maxRound}</strong><br>
        </div>
</section>

<style>
section {
	display : flex;
	flex-wrap : wrap;
	justify-content: space-between;
	width : 100%;
	margin-top : 20px;
	font-size : 3rem;
}
</style>