<script>
    import {fade, fly} from "svelte/transition";

    export let scoreOne;
    export let scoreTwo;
</script>

<div
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

<style>
div {
    font-size:3rem;
    color:white;
}
h2 {
    margin:0;
}
</style>