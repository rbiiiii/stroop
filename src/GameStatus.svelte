<script>
    import {fly} from "svelte/transition";

    export let scoreOne;
    export let scoreTwo;
    export let timerStatus;
    export let round;
    export let maxRound;

</script>

<div class="game-status"
    in:fly="{{ y: 20, duration: 300 }}" 
    out:fly="{{ y: 0, duration: 0 }}">
        <div class="score">
            Score<br><strong>{scoreOne}</strong> - <strong>{scoreTwo}</strong><br>
        </div>
        <div class="timer">
            Temps restant<br><strong class="timer-status">{timerStatus}</strong>	
        </div>
        <div class="round">
            Partie<br><strong>{round} / {maxRound}</strong><br>
        </div>
</div>