const init = () => {
	const output = document.body.querySelector(".output");
	const datepicker = new WUIDatepicker({
		selector: ".wui-datepicker.my-datepicker",
		//locale: "en-US",
		value: "2026-01-01",
		//min: "",
		//max: "",
		//monthsNames: [],
		//weekDaysNames: [],
		//texts: {},
		//openDirection: "down",
		//boxAlign: "left",
		//hidden: false,
		//enabled: true,
		onOpen: (value) => {
			output.textContent = `Opened - value: ${value}`;
		},
		onChange: (value) => {
			output.textContent = `Changed - value: ${value}`;
		},
		onClose: (value) => {
			output.textContent = `Closed - value: ${value}`;
		}
	});
	datepicker.init();
}

window.addEventListener("DOMContentLoaded", init);
