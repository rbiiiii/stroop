<script>
    import ColorBlock from "./ColorBlock.svelte";
    import MainColorBlock from "./MainColorBlock.svelte";

    import { getKeyCodes, shuffleArray } from './Utils.svelte';
    import { createEventDispatcher } from 'svelte';

    export let scoreOne;
    export let scoreTwo;
    export let currentColors;
    export let round;
    export let canTrigger;
    export let getTranslationText;

    const dispatch = createEventDispatcher();
    const keyCodes = getKeyCodes();
    const keyCodesOne = keyCodes.keyCodesOne;
    const keyCodesTwo = keyCodes.keyCodesTwo;
    const allKeyCodes = keyCodesOne.concat(keyCodesTwo);
    let soundPositive = new Audio('./mp3/response-positive.mp3');
    let soundNegative = new Audio('./mp3/response-negative.mp3');

    $: randomColors = currentColors.slice(0, 4);
    $: randomColorsOne = shuffleArray(randomColors);
    $: randomColorsTwo = currentColors.slice(0, 4);

    const handleKeydown = (e) => {
        let keyCode = e.keyCode;

        if (canTrigger && allKeyCodes.includes(keyCode)) {
            checkColorBlock(keyCode);
        }
    }

    const soundResponse = (check) => {
        let sound = soundPositive;
        if (!check) {
            sound = soundNegative;
        }
        sound.pause();
        sound.currentTime = 0;
        sound.play();
    }

    const checkColorBlock = (keyCode) => {
        canTrigger = false;

        let currentColor = document.getElementById("main-color-block").dataset.colorcode;
        let btnColor = '';
        let response = false;
        let player = null;

        for (let i = 0; i < keyCodesOne.length; i++) {
            if (keyCode == keyCodesOne[i]) {
                btnColor = randomColorsOne[i].code;
                player = 1;
            }
        };

        for (let i = 0; i < keyCodesTwo.length; i++) {
            if (keyCode == keyCodesTwo[i]) {
                btnColor = randomColorsTwo[i].code;
                player = 2;
            }
        };

        let dispatchResponse = () => {
            if (currentColor == btnColor) {
                if (player == 1) {scoreOne += 1}
                if (player == 2) {scoreTwo += 1}
                response = true;
            }
            soundResponse(response);
            dispatch('colorBlockClicked', {
                round: round + 1,
                response: response,
                player: player,
                scoreOne : scoreOne,
                scoreTwo : scoreTwo,
                canTrigger : canTrigger
            });
        }

        dispatchResponse();
    }
</script>

<svelte:window on:keydown={handleKeydown}/>

<section class="board">
    <MainColorBlock
        {randomColors}
    />
    <div class="color-blocks-container">
        <div class="color-blocks">
            <h3>{getTranslationText("playerOne")}</h3>
            {#each randomColorsOne as color, index (color.id)}
                <ColorBlock
                    {color}
                />
            {/each}
        </div>
        <div class="color-blocks">
            <h3>{getTranslationText("playerTwo")}</h3>
            {#each randomColorsTwo as color, index (color.id)}
                <ColorBlock
                    {color}
                />
            {/each}
        </div>
    </div>
</section>

<style>
    .board {
        margin-top:140px;
    }
    h3 {
        font-size: 2.4rem;
        color:white;
    }
    .color-blocks-container {
        display:flex;
        justify-content: space-between;
        width:90vw;
        margin: 60px auto 0 auto;
    }
    .color-blocks {
        margin:0;
    }
</style>