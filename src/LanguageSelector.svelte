<script>
    import { getKeyCodes } from './Utils.svelte';
    import { createEventDispatcher } from 'svelte';

    export let soundBlip;
    export let soundError;

    const keyCodes = getKeyCodes();
    const keyCodesOne = keyCodes.keyCodesOne;
    const keyCodesTwo = keyCodes.keyCodesTwo;
    const allKeyCodes = keyCodesOne.concat(keyCodesTwo);
    const dispatch = createEventDispatcher();

    const getLang = (key) => {
        if (key == keyCodesOne[0] || key == keyCodesTwo[0] ) {return "fr"}
        if (key == keyCodesOne[1] || key == keyCodesTwo[1]) {return "nl"}
        if (key == keyCodesOne[2] || key == keyCodesTwo[2]) {return "de"}
        if (key == keyCodesOne[3] || key == keyCodesTwo[3]) {return "en"}
    }

    const handleKeydown = (e) => {
        let keyCode = e.keyCode;
        if (allKeyCodes.includes(keyCode)) {
            soundBlip.play();
            dispatch('languageSelection', {
                currentLang : getLang(keyCode)
            });
        } else {
            soundError.play();
        }
    }
</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="instructions">
    <h2>Choose your language :</h2>
    <ul>
        <li><button>FR</button><br><span>A</span></li>
        <li><button>NL</button><br><span>B</span></li>
        <li><button>DE</button><br><span>C</span></li>
        <li><button>EN</button><br><span>D</span></li>
    </ul>
</div>

<style>
    h2 {
        font-size: 3rem;
        font-weight: normal;
    }
    ul {
        display: flex;
        justify-content: center;
        margin:0;
        padding:0;
    }
    li {
        list-style:none;
        margin:10px;
    }
    span {
        font-size:2rem;
    }
</style>