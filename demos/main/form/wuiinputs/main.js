const wuiComponents = {};

const init = () => {
	wuiComponents.form = new WUIForm({
		selector: ".wui-form.my-form",
		submit: false
	});
	wuiComponents.selectpicker = new WUISelectpicker({
		selector: ".wui-selectpicker.my-selectpicker",
		value: "2",
		onOpen: () => { closePickers("selectpicker"); }
	});
	wuiComponents.datepicker = new WUIDatepicker({
		selector: ".wui-datepicker.my-datepicker",
		value: "2026-02-20",
		boxAlign: "right",
		onOpen: () => { closePickers("datepicker"); }
	});
	wuiComponents.timepicker = new WUITimepicker({
		selector: ".wui-timepicker.my-timepicker",
		value: "12:00",
		boxAlign: "right",
		onOpen: () => { closePickers("timepicker"); }
	});
	wuiComponents.colorpicker = new WUIColorpicker({
		selector: ".wui-colorpicker.my-colorpicker",
		value: "#ff0000",
		boxAlign: "right",
		onOpen: () => { closePickers("colorpicker"); }
	});
	wuiComponents.switchbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1"
	});
	wuiComponents.intensity = new WUIIntensity({
		selector: ".wui-intensity.my-intensity",
		value: "1"
	});
	wuiComponents.cancelButton = new WUIButton({
		selector: ".wui-button.cancel",
		onClick: () => { }
	});
	wuiComponents.submitButton = new WUIButton({
		selector: ".wui-button.submit",
		onClick: () => { }
	});
	Object.values(wuiComponents).forEach((component) => {
		component.init();
	});
}

const closePickers = (excludeId) => {
	Object.entries(wuiComponents).forEach(([id, component]) => {
		if (component.constructor.name.match(/picker/i) && id !== excludeId && component.close) {
			component.close();
		}
	});
}

window.addEventListener("DOMContentLoaded", init);