const init = () => {
	const output = document.body.querySelector(".my-output");
	const timepicker = new WUITimepicker({
		selector: ".wui-timepicker.my-timepicker",
		value: "10:30",
		//min: "00:00",
		//max: "23:59",
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
	timepicker.init();
}

window.addEventListener("DOMContentLoaded", init);