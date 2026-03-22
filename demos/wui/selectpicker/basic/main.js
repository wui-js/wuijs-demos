const init = () => {
	const output = document.body.querySelector(".my-output");
	const selectpicker = new WUISelectpicker({
		selector: ".wui-selectpicker.my-selectpicker",
		value: "2",
		//lang: "en",
		//texts: {},
		//openDirection: "down",
		//multiple: false,
		//separatorValue: ",",
		//separatorText: ", ",
		//filterable: true,
		//enabled: true,
		onOpen: (value) => {
			output.textContent = `Opened - value: ${value}`;
		},
		onChange: (value) => {
			output.textContent = `Changed - value: ${value}`;
		}
	});
	selectpicker.init();
}

window.addEventListener("DOMContentLoaded", init);