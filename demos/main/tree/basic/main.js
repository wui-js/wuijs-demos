const init = () => {
	const output = document.body.querySelector(".output");
	const tree = new WUITree({
		selector: ".wui-tree.my-tree",
		nodes: [
			{ id: "docs", text: "Documents", iconType: "folder", opened: true, nodes: [
				{ id: "readme", text: "README.md", iconType: "file" },
				{ id: "changelog", text: "CHANGELOG.md", iconType: "file" }
			]},
			{ id: "src", text: "src", iconType: "folder", nodes: [
				{ id: "main", text: "main.js", iconType: "file" },
				{ id: "legacy", text: "legacy.js", iconType: "file", enabled: false }
			]}
		],
		//target: null,
		onClick: (id, isLeaf, isOpen) => {
			output.textContent = `Click - node: ${id}, leaf: ${isLeaf}, open: ${isOpen}`;
		}
	});
	tree.init();
}

window.addEventListener("DOMContentLoaded", init);
