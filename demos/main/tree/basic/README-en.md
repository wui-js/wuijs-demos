# WUITree - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUITree's basic functionality.

## WUI/JS Stack

- WUITree - 0.3

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUITree](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tree/wui-tree-en.md): `WUITree` component documentation.

## Source

| Type | File |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |

## Implementation

CSS code:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

nav {
	display: flex;
	margin: 10px;
	flex-direction: column;
	gap: 10px;
}

.my-tree {}

.output {
	font-family: monospace;
}
```

HTML header:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tree/wui-tree-0.3.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tree/wui-tree-0.3.css">
<script type="text/javascript" src="/libraries/wui-js/main/tree/wui-tree-0.3.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-tree my-tree"></div>
	<div class="output"></div>
</nav>
```

JS code:

```js
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
```

> [!IMPORTANT]
> If the selector does not match any element, `print()` does not render the tree.
