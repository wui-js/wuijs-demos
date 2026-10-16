const init = () => {
	const output = document.body.querySelector(".output");
	const avatarpicker = new WUIAvatarpicker({
		selector: ".wui-avatarpicker.my-avatarpicker",
		name: "myAvatar",
		//size: 180,
		//source: "",
		//params: {},
		//minImageSize: 180,
		maxFileSize: 2097152,
		//enabled: true,
		//onRequirePermission: null,
		onInvalid: (type, value, limit) => {
			output.textContent = `Invalid - type: ${type}, value: ${value}, limit: ${limit}`;
		},
		onLoad: (image) => {
			output.textContent = `Load - scale: ${avatarpicker.params.scale}%`;
		}
	});
	avatarpicker.init();
}

window.addEventListener("DOMContentLoaded", init);
