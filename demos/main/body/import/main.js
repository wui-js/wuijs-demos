const init = () => {
	const body = new WUIBody({
		//environment: "web",
		importDirectory: "./modules/",
		//importMode: "fetch",
		onCompleted: () => {
			body.prepare();
		},
		debug: true
	});
	body.import("testContent", "test/module", () => {
		testContentLog("test content loaded");
	});
}

window.addEventListener("DOMContentLoaded", init);