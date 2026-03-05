const wuiComponents = {};

const init = () => {
	const themes = new WUIPluginThemes();
	wuiComponents.switch = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1",
		activated: false,
		onChange: (value, activated) => {
			themes.setScheme(activated ? "dark" : "light");
		}
	});
	wuiComponents.selectpicker = new WUISelectpicker({
		selector: ".wui-selectpicker.my-selectpicker",
		value: "2"
	});
	Object.values(wuiComponents).forEach((component) => {
		component.init();
	});
}

window.addEventListener("wuiLoad", init);