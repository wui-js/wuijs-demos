const init = () => {
	const form = new WUIForm({
		selector: ".wui-form.my-form",
		fieldStyle: "line",
		submit: false,
		onScrolling: (top) => { },
		onSubmit: () => { }
	});
	form.init();
}

window.addEventListener("DOMContentLoaded", init);
