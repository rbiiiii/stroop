<script>
    import {fly} from "svelte/transition";

    export let response;
    export let getTranslationText;
</script>

<div class="game-alert">
    <div
        in:fly="{{ y: 20, duration: 300 }}" 
        out:fly="{{ y: 20, duration: 150 }}">
            <p>{response ? getTranslationText("true") : getTranslationText("false")}</p>
    </div>
</div>