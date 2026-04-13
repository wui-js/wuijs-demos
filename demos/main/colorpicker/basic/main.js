const init = () => {
	const output = document.body.querySelector(".my-output");
	const colorpicker = new WUIColorpicker({
		selector: ".wui-colorpicker.my-colorpicker",
		value: "#1e90ff",
		//emptyValue: "#000001",
		//lang: "en",
		//texts: {},
		//openDirection: "down",
		//boxAlign: "left",
		//enabled: true,
		onOpen: (value) => {
			output.textContent = `Opened - value: ${value}`;
		},
		onChange: (value) => {
			output.textContent = `Changed - value: ${value}`;
		}
	});
	colorpicker.init();
}

window.addEventListener("DOMContentLoaded", init);