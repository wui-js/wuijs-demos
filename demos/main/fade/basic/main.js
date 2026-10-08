const init = () => {
	const element = document.getElementById("myElement");
	const fadeinButton = document.querySelector("button.fadein");
	const fadeoutButton = document.querySelector("button.fadeout");
	const options = {
		delay: 200,
		//display: "block",
		//callback: () => {}
	};
	fadeinButton.addEventListener("click", () => {
		element.wuiFadein(options);
		// or alternatively
		//WUIFade.in(element, options);
	});
	fadeoutButton.addEventListener("click", () => {
		element.wuiFadeout(options);
		// or alternatively
		//WUIFade.out(element, options);
	});
}

window.addEventListener("DOMContentLoaded", init);