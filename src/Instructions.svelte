<script>
    export let getTranslationText;
</script>

<div>
    <p>{getTranslationText("startGame")}
        <br><button class="big">Play<br>Stop</button>
    </p>
    <p>{getTranslationText("instructions")}
        <br><button>A</button>&nbsp;<button>B</button>&nbsp;<button>C</button>&nbsp;<button>D</button>
    </p>
</div>

<style>
    div {
        margin-top: 30px;
	    font-size: 2rem;
    }
</style>