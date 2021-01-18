<script>
    import { createEventDispatcher } from 'svelte';

    const keyCodes = [65, 90, 69, 82] // A, Z, E, R
    const dispatch = createEventDispatcher();

    const getLang = (key) => {
        if (key == keyCodes[0]) {return "fr"}  // A
        if (key == keyCodes[1]) {return "nl"}  // Z
        if (key == keyCodes[2]) {return "de"}  // E
        if (key == keyCodes[3]) {return "en"}  // R
    }

    const handleKeydown = (e) => {
        let keyCode = e.keyCode;
        if (keyCodes.includes(keyCode)) {
            dispatch('languageSelection', {
                currentLang : getLang(keyCode)
            });
        }
    }
</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="instructions">
    <h2>Choose your language :</h2>
    <ul>
        <li><code>FR</code></li>
        <li><code>NL</code></li>
        <li><code>DE</code></li>
        <li><code>EN</code></li>
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
    code {
        padding:0.5em;
    }
</style>