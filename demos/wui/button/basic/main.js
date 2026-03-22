const init = () => {
	const output = document.body.querySelector(".my-output");
	const button1 = new WUIButton({
		selector: ".wui-button.button1",
		//text: "",
		//selectable: false,
		//locked: false,
		//enabled: true,
		onClick: () => {
			output.textContent = "Click button 1";
		},
		onDblClick: () => {
			output.textContent = "Double-Click button 1";
		}
	});
	const button2 = new WUIButton({
		selector: ".wui-button.button2",
		//text: "",
		//selectable: false,
		//locked: false,
		//enabled: true,
		onClick: () => {
			output.textContent = "Click button 2";
		},
		onDblClick: () => {
			output.textContent = "Double-Click button 2";
		}
	});
	button1.init();
	button2.init();
}

window.addEventListener("DOMContentLoaded", init);