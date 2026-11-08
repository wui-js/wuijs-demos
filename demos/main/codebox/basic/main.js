const init = () => {
	const codebox = new WUICodebox({
		selector: ".wui-codebox.my-codebox",
		//type: "txt",
		style: "github",
		//lineNumbering: true,
		//copyButton: true,
		//copyButtonPosition: "top-right"
	});
	codebox.init();
}

window.addEventListener("DOMContentLoaded", init);
