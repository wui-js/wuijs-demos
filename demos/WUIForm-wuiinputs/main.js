const init = () => {
	const form = new WUIForm({
		selector: ".wui-form.my-form",
		submit: false
	});
	const selectpicker = new WUISelectpicker({
		selector: ".wui-selectpicker.my-selectpicker",
		value: "2"
	});
	const datepicker = new WUIDatepicker({
		selector: ".wui-datepicker.my-datepicker",
		value: "2026-02-20"
	});
	const timepicker = new WUITimepicker({
		selector: ".wui-timepicker.my-timepicker",
		value: "12:00"
	});
	const colorpicker = new WUIColorpicker({
		selector: ".wui-colorpicker.my-colorpicker",
		value: "#ff0000"
	});
	const switchbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1"
	});
	const intensity = new WUIIntensity({
		selector: ".wui-intensity.my-intensity",
		value: "1"
	});
	const cancelButton = new WUIButton({
		selector: ".wui-button.cancel",
		onClick: () => { }
	});
	const submitButton = new WUIButton({
		selector: ".wui-button.submit",
		onClick: () => { }
	});
	form.init();
	selectpicker.init();
	datepicker.init();
	timepicker.init();
	colorpicker.init();
	switchbox.init();
	intensity.init();
	cancelButton.init();
	submitButton.init();
}

window.addEventListener("DOMContentLoaded", init);