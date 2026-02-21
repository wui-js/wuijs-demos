const init = () => {
	const output = document.body.querySelector(".my-output");
	const checkbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1",
		activated: true,
		//enabled: true,
		onChange: (value, activated) => {
			output.textContent = `Change - value: ${value}, activated: ${activated}`;
		}
	});
	checkbox.init();
}

window.addEventListener("DOMContentLoaded", init);