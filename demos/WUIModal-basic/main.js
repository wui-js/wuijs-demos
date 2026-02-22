const init = () => {
	const button = document.querySelector(".my-button");
	const modal = new WUIModal({
		selector: ".wui-modal.my-modal",
		//openDelay: 200,
		//onStartOpen: null,
		onOpen: () => {
			console.log("Modal opened");
		},
		//onMaximize: null,
		//onScrolling: null,
		//onStartClose: null,
		onClose: () => {
			console.log("Modal closed");
		}
		//onBack: null
	});
	modal.init();
	button.addEventListener("click", () => {
		modal.open();
	});
}

window.addEventListener("DOMContentLoaded", init);