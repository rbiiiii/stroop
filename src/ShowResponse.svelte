<script>
    export let response;
    export let getTranslationText;
</script>

<div class="game-alert">
    <div>
        <p>{response ? getTranslationText("true") : getTranslationText("false")}</p>
    </div>
</div>