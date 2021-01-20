<script>
    import {fly} from "svelte/transition";

    export let getTranslationText;
</script>

<div class="show-time-elapsed game-alert">
    <div
        in:fly="{{ y: 40, duration: 300 }}" 
        out:fly="{{ y: 40, duration: 150 }}">
        <p>{@html getTranslationText("timeElapsed")}</p>
    </div>
</div>