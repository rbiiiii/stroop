<script>
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
    data-colorcode="{randomColorCode}">
        {randomColorTxt}
</div>

<style>
    div {
        display:inline-block;
        margin:5vh auto;
        padding:0.5em 1em;
        border:1px solid;
        background-color:var(--colorcode);
        color:white;
        font-size: 1.25rem;
    }
</style>