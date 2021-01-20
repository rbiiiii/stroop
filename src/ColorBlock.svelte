<script>

export let color;

</script>

<button data-color-txt="{color.txt}">{color.txt}</button>

<style>
button {
	width: 9em;
    height: 9em;
    margin:1em;
}
button:after {
	width: 7.2em;
    height: 7.2em;
}
</style>