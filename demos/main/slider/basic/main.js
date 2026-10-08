const init = () => {
	const prevButton = document.body.querySelector("button.prev");
	const nextButton = document.body.querySelector("button.next");
	const output = document.body.querySelector(".output");
	const slider = new WUISlider({
		selector: ".wui-slider.my-slider",
		transitionDelay: 300,
		onChange: (index) => {
			output.textContent = `Change to: ${index}`;
		}
	});
	slider.init();
	prevButton.addEventListener("click", () => {
		slider.prev();
	});
	nextButton.addEventListener("click", () => {
		slider.next();
	});
}

window.addEventListener("DOMContentLoaded", init);