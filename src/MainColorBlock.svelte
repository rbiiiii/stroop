<script>
import {fly} from "svelte/transition";

export let randomColors;

let getRandomNum = (arr) => {
    return Math.floor(Math.random() * arr.length);
}

$: randomColorCode = randomColors[getRandomNum(randomColors)].code;
$: randomColorTxt = randomColors[getRandomNum(randomColors)].txt;

$: document.documentElement.style.setProperty('--colorcode', randomColorCode);
</script>

<div 
    id="main-color-block"
    data-colorcode="{randomColorCode}"
    in:fly="{{ y: 20, duration: 300 }}" 
  	out:fly="{{ y: 20, duration: 150 }}">
        {randomColorTxt}
</div>

<style>
    div {
        display:inline-block;
        margin:90px auto 0 auto;
        font-size: 8rem;
        color:var(--colorcode);
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing:0.1em;
        backdrop-filter: blur(5px);
        padding:0.25em;
        border-radius: 50%;
        line-height: 1;
        -webkit-text-stroke: 1px rgba(0,0,0,0.8);
    }
</style>