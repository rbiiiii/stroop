<script>
    import MainColorBlock from "./MainColorBlock.svelte";
    import ColorBlock from "./ColorBlock.svelte";
    import { createEventDispatcher } from 'svelte';

    export let colors;
    export let score;
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

        let dispatchResponse = () => {
            if (currentColor == btnColor) {
                score += 1;
                response = true;
            }

            dispatch('colorBlockClicked', {
                score: score,
                round: round + 1,
                response: response
            });
        }
        
        // A
        if (keyCode == 65) {
            btnColor = randomColors[0].code;
            dispatchResponse();
        }
        // Z
        else if (keyCode == 90) {
            btnColor = randomColors[1].code;
            dispatchResponse();
        }
        // E
        else if (keyCode == 69) {
            btnColor = randomColors[2].code;
            dispatchResponse();
        }
        // R
        else if (keyCode == 82) {
            btnColor = randomColors[3].code;
            dispatchResponse();
        }
        else {
            console.log("wrong key");
        }
    }
</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="board">
    <MainColorBlock
        {randomColors}
    />
    <div class="colors-blocks">
        {#each randomColors as color, index (color.id)}
            <ColorBlock
                {color}
            />
        {/each}
    </div>
</div>