# WUIMarkdown - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUIMarkdown's basic functionality.

## WUI/JS Stack

- WUIMarkdown - 0.3

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIMarkdown](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/markdown/wui-markdown-en.md): `WUIMarkdown` component documentation.

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

.my-markdown {}

.output {
	font-family: monospace;
}
```

HTML header:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/markdown/wui-markdown-0.3.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/markdown/wui-markdown-0.3.texts.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/markdown/wui-markdown-0.3.css">
<script type="text/javascript" src="/libraries/wui-js/main/markdown/wui-markdown-0.3.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-markdown my-markdown"></div>
	<div class="output"></div>
</nav>
```

JS code:

```js
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
```

> [!IMPORTANT]
> The container of the generated HTML must have the `wui-markdown` class for the styles to apply.
