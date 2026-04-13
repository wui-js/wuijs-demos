const init = () => {
	const form = new WUIForm({
		selector: ".wui-form.my-form",
		submit: false,
		onScrolling: (top) => { },
		onSubmit: () => { }
	});
	form.init();
}

window.addEventListener("DOMContentLoaded", init);