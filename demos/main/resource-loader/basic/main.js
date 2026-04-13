const wuiComponents = {};

const init = () => {
	wuiComponents.selectpicker = new WUISelectpicker({
		selector: ".wui-selectpicker.my-selectpicker",
		value: "2"
	});
	wuiComponents.switchbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1"
	});
	Object.values(wuiComponents).forEach((component) => {
		component.init();
	});
}

window.addEventListener("wuiLoad", init);