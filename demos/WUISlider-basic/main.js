const init = () => {
	const output = document.body.querySelector(".my-output");
	const slider = new WUISlider({
		selector: ".wui-slider.my-slider",
		onChange: (index) => {
			output.textContent = `Change to: ${index}`;
		}
	});
	slider.init();
}

window.addEventListener("DOMContentLoaded", init);