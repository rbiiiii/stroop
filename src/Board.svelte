<script>
    import MainColorBlock from "./MainColorBlock.svelte";
    import ColorBlock from "./ColorBlock.svelte";
    import { createEventDispatcher } from 'svelte';

    export let score;
    export let scoreOne;
    export let scoreTwo;
    export let colors;
    export let round;

    const dispatch = createEventDispatcher();

    $: randomColors = colors.slice(0, 4);

    let handleKeydown = (e) => {
        checkColorBlock(e.keyCode);
    }

    let checkColorBlock = (keyCode) => {
        
        let currentColor = document.getElementById("main-color-block").dataset.colorcode;
        let btnColor = '';
        let response = false;
        let player = null;
        
        // A
        if (keyCode == 65) {
            btnColor = randomColors[0].code;
            player = 1;
        }
        // Z
        else if (keyCode == 90) {
            btnColor = randomColors[1].code;
            player = 1;
        }
        // E
        else if (keyCode == 69) {
            btnColor = randomColors[2].code;
            player = 1;
        }
        // R
        else if (keyCode == 82) {
            btnColor = randomColors[3].code;
            player = 1;
        }
        // U
        else if (keyCode == 85) {
            btnColor = randomColors[0].code;
            player = 2;
        }
        // I
        else if (keyCode == 73) {
            btnColor = randomColors[0].code;
            player = 2;
        }
        // O
        else if (keyCode == 79) {
            btnColor = randomColors[0].code;
            player = 2;
        }
        // P
        else if (keyCode == 80) {
            btnColor = randomColors[0].code;
            player = 2;
        }

        let dispatchResponse = () => {
            if (currentColor == btnColor) {
                score += 1;
                if (player == 1) {scoreOne += 1}
                if (player == 2) {scoreTwo += 1}
                response = true;
            }

            dispatch('colorBlockClicked', {
                score: score,
                round: round + 1,
                response: response,
                player: player,
                scoreOne : scoreOne,
                scoreTwo : scoreTwo
            });
        }

        dispatchResponse();
    }
</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="board">
    <MainColorBlock
        {randomColors}
    />
    <div class="colors-blocks">
        <h3>Joueur 1</h3>
        {#each randomColors as color, index (color.id)}
            <ColorBlock
                {color}
            />
        {/each}
    </div>
    <div class="colors-blocks">
        <h3>Joueur 2</h3>
        {#each randomColors as color, index (color.id)}
            <ColorBlock
                {color}
            />
        {/each}
    </div>
</div>