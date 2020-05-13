<script>

export let color;

</script>

<button data-color-txt="{color.txt}">{color.txt}</button>

<style>

    button {
        position: relative;
        display: inline-block;
        width: 9em;
        height: 9em;
        border: 0;
        margin: 1em;
        outline: none;
        background-color: #971c82;
        font-size: 1rem;
        color:white;
        text-transform: uppercase;
        text-align: center;
        border-radius: 50%;
        cursor: pointer;
        -webkit-transition: box-shadow 200ms;
        transition: box-shadow 200ms;
    }
    button {
        box-shadow: inset 0 0.28125em 0 #ac2095, inset 0 -0.28125em 0 #811870, inset 0 0 0 0.28125em #8a1977, inset 0 0 0 0.75em #971c82, inset 0 0 0 0.9em #410c38, inset 0 0 0 0.9782608696em black, inset 0 0 0 1.2em rgba(227, 104, 207, 0.7), inset 0 0 0 1.6363636364em #971c82, inset 0 3.6em 1.2em #811870, inset 0 0 0.9em 1.5em #6c145d, 0 0.45em 0 rgba(0, 0, 0, 0.3);
    }
    button:after {
        content: '';
        position: absolute;
        bottom: 0.45em;
        left: 0.9em;
        display: block;
        width: 7.2em;
        height: 7.2em;
        border: 0.6em solid rgba(0, 0, 0, 0.3);
        border-width: 0 0 0.6em;
        border-radius: 50%;
        -webkit-transition-duration: 200ms;
                transition-duration: 200ms;
    }
    button:active, button:focus {
        box-shadow: inset 0 0.28125em 0 #ac2095, inset 0 -0.28125em 0 #811870, inset 0 0 0 0.28125em #8a1977, inset 0 0 0 0.75em #971c82, inset 0 0 0 0.9em #410c38, inset 0 0 0 1.0588235294em black, inset 0 0 0 1.2em rgba(227, 104, 207, 0.2), inset 0 0 0 1.6363636364em #8a1977, inset 0 3.6em 1.2em #741565, inset 0 0 0.9em 1.5em #56104a, 0 0.45em 0 rgba(0, 0, 0, 0.3);
        background-color: #8e1a7b;
        outline:0;
    }
    button:active:after, button:focus:after {
        bottom: 1.05em;
        border-width: 0;
        outline:0;
    }
    button::-moz-focus-inner {
        border: 0;
    }

</style>