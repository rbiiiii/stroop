<script>
    import {fade, fly} from "svelte/transition";

    export let scoreOne;
    export let scoreTwo;
    export let getTranslationText;

</script>

<section
    in:fly="{{ y: 20, duration: 300 }}">
        {#if scoreOne > scoreTwo}
            <h2>{getTranslationText("playerOneWins")}</h2>
        {/if}
        {#if scoreOne == scoreTwo}
            <h2>{getTranslationText("tieGame")}</h2>
        {/if}
        {#if scoreOne < scoreTwo}
            <h2>{getTranslationText("playerTwoWins")}</h2>
        {/if}
        <h2>{getTranslationText("finalScore")} : <strong>{scoreOne} - {scoreTwo}</strong></h2>
</section>

<style>
section {
    margin:30px auto;
    font-size:3rem;
    color:white;
}
h2 {
    margin:0;
}
</style>