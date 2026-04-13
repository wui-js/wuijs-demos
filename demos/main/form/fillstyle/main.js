const init = () => {
	const form = new WUIForm({
		selector: ".wui-form.my-form",
		submit: false,
		//onScrolling: null,
		//onSubmit: null
	});
	form.init();
}

window.addEventListener("DOMContentLoaded", init);