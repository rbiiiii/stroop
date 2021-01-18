<h1>
    <img src="img/title.svg" alt="">
    <span>S</span>
    <span>t</span>
    <span>r</span>
    <span>o</span>
    <span>o</span>
    <span>p</span>
    <span class="new-word">E</span>
    <span>f</span>
    <span>f</span>
    <span>e</span>
    <span>c</span>
    <span>t</span> 
</h1>

<style>
    h1 {
		text-align: center;
	}
	h1 span {
		display:inline-block;
		font-size: 6rem;
		color:white;
		font-weight: bold;
		animation: letter-anim 2.4s ease-out infinite;
		--letter-anim-duration : 0.1s;
	}
	h1 span:nth-of-type(1) {
		animation-delay: calc(1 * var(--letter-anim-duration));
	}
	h1 span:nth-of-type(2) {
		animation-delay: calc(2 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.94);
	}
	h1 span:nth-of-type(3) {
		animation-delay: calc(3 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.88);
	}
	h1 span:nth-of-type(4) {
		animation-delay: calc(4 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.82);
	}
	h1 span:nth-of-type(5) {
		animation-delay: calc(5 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.76);
	}
	h1 span:nth-of-type(6) {
		animation-delay: calc(6 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.70);
	}
	h1 span:nth-of-type(7) {
		animation-delay: calc(7 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.94);
	}
	h1 span:nth-of-type(8) {
		animation-delay: calc(8 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.88);
	}
	h1 span:nth-of-type(9) {
		animation-delay: calc(9 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.82);
	}
	h1 span:nth-of-type(10) {
		animation-delay: calc(10 * var(--letter-anim-duration));
		color:rgba(255, 255, 255, 0.76);
	}
	h1 span:nth-of-type(11) {
		animation-delay: calc(11 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.70);
    }
    h1 span:nth-of-type(12) {
		animation-delay: calc(12 * var(--letter-anim-duration));
		color:rgba(255,255,255,0.64);
	}
	h1 .new-word {
		margin-left:0.25em;
	}
	h1 img {
		display:block;
		width:490px;
		height:auto;
		margin:10px auto;
    }
    
    @keyframes scoreUp{
		0%   { transform:scale(1); }
		70%  { transform:scale(1.3); }
		100% { transform:translateY(0px); }
	}

	@keyframes letter-anim {
		0%   { transform:translateY(0px); }
		10%  { transform:translateY(-5px); }
		20% { transform:translateY(0px); }
		100% { transform:translateY(0px); }
	}
</style>