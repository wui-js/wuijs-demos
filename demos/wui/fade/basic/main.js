const init = () => {
	const element = document.getElementById("myElement");
	const fadeinButton = document.querySelector(".my-button.fadein");
	const fadeoutButton = document.querySelector(".my-button.fadeout");
	const options = {
		delay: 200,
		//display: "block"
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