const init = () => {
	const body = new WUIBody({
		//environment: "web",
		importDirectory: "./fragments/",
		//importMode: "fetch",
		onCompleted: () => {
			body.prepare();
		},
		debug: true
	});
	body.import("myFragment", "my-fragment/fragment", () => {
		myFragmentContentLog("test content loaded");
	});
}

window.addEventListener("DOMContentLoaded", init);