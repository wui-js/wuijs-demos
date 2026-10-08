const init = () => {
	const button = document.querySelector("button.open");
	const output = document.body.querySelector(".output");
	const modal = new WUIModal({
		selector: ".wui-modal.my-modal",
		//mode: "page",
		//slidePosition: "right",
		//overlay: true,
		//priority: false,
		//transitionDelay: 300,
		onStartOpen: () => {
			output.textContent = "Opening modal";
		},
		onOpen: () => {
			output.textContent = "Modal opened";
		},
		//onMaximize: null,
		//onScrolling: null,
		onStartClose: () => {
			output.textContent = "Closing modal";
		},
		onClose: () => {
			output.textContent = "Modal closed";
		}
		//onBack: null
	});
	modal.init();
	button.addEventListener("click", () => {
		modal.open();
	});
}

window.addEventListener("DOMContentLoaded", init);