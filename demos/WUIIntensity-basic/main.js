const init = () => {
	const output = document.body.querySelector(".my-output");
	const intensity = new WUIIntensity({
		selector: ".wui-intensity.my-intensity",
		value: 1,
		//enabled: true,
		onChange: (event, value) => {
			output.textContent = `Change - value: ${value}`;
		}
	});
	intensity.init();
}

window.addEventListener("DOMContentLoaded", init);