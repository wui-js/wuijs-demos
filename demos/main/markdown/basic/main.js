const init = () => {
	const container = document.body.querySelector(".my-markdown");
	const output = document.body.querySelector(".output");
	const markdown = new WUIMarkdown({
		content: "# Title\n\n## Section\n\n> [!NOTE]\n> Note text.",
		lang: "en",
		//strict: true,
		//ignoreTitles: [],
		//includeOrderInTitles: true,
		//includeOrderInMainTitle: false,
		//targetPrefix: "wui-markdown-title",
		//preClass: "wui-codebox",
		//forceAbsolutePaths: false,
		//githubUserContent: false,
		//linkRules: []
	});
	markdown.init();
	const { index, htmlContent } = markdown.parse();
	container.innerHTML = htmlContent;
	output.textContent = `Index: ${JSON.stringify(index)}`;
}

window.addEventListener("DOMContentLoaded", init);
