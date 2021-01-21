<script context="module">

   export function getKeyCodes() {
		let keys = {
			keyCodesOne : [65, 90, 69, 82], // A, Z, E, R
			keyCodesTwo : [85, 73, 79, 80],  // U, I, O, P
			startStop : 13, // ENTER
			lang : 76 // L
		}
		return keys;
	}
	
	export function openFullscreen(dom) {
		if (dom.requestFullscreen) {
			dom.requestFullscreen();
		} else if (dom.mozRequestFullScreen) { /* Firefox */
			dom.mozRequestFullScreen();
		} else if (dom.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
			dom.webkitRequestFullscreen();
		} else if (dom.msRequestFullscreen) { /* IE/Edge */
			dom.msRequestFullscreen();
		}
	}

	export function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
    }
    
</script>