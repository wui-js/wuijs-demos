const init = () => {
	const output = document.body.querySelector(".output");
	const http = new WUIHttp({
		//token: null
	});
	let controller = null;
	document.body.querySelector(".load-text").addEventListener("click", async () => {
		controller = new AbortController();
		try {
			const content = await http.getUrlContent({
				url: "./data.json",
				//method: "GET",
				//token: "",
				//headers: {},
				//body: "",
				responseType: "text",
				signal: controller.signal,
				onProgress: ({ loaded, total }) => {
					output.textContent = `Progress - ${loaded} / ${total} bytes`;
				}
			});
			output.textContent = `Text - content: ${content}`;
		} catch (error) {
			output.textContent = `Error - ${error}`;
		}
	});
	document.body.querySelector(".load-json").addEventListener("click", async () => {
		controller = new AbortController();
		try {
			const data = await http.responseJson({
				url: "./data.json",
				signal: controller.signal
			});
			output.textContent = `JSON - name: ${data.name}, version: ${data.version}`;
		} catch (error) {
			output.textContent = `Error - ${error}`;
		}
	});
	document.body.querySelector(".cancel").addEventListener("click", () => {
		if (controller) {
			controller.abort();
		}
	});
}

window.addEventListener("DOMContentLoaded", init);
