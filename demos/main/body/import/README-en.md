# WUIBody - Import demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUIBody's import functionality.

## WUI/JS Stack

- WUIBody - 0.10

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIBody](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-body): `WUIBody` component documentation.

## Source

| Type | File |
|:----:| ---- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |
| CSS  | [fragments/my-fragment/fragment.css](./fragments/my-fragment/fragment.css) |
| HTML | [fragments/my-fragment/fragment.htm](./fragments/my-fragment/fragment.htm) |
| JS   | [fragments/my-fragment/fragment.js](./fragments/my-fragment/fragment.js) |

## Implementation

CSS content of the `./fragments/my-fragment/fragment.css` file:

```css
.my-fragment {
	margin: 10px;
}

.my-fragment a,
.my-fragment a:visited {
	text-decoration: none;
	font-size: 20px;
	color: blue;
}
```

HTML content of the `./fragments/my-fragment/fragment.htm` file:

```html
<section id="myFragment" class="my-fragment">
	<a href="https://wuijs.dev" target="_blank">go to WUI/JS Project website!</a>
</section>
```

JS content of the `./fragments/my-fragment/fragment.js` file:

```js
const myFragmentContentLog = (content) => {
	const output = document.body.querySelector(".output");
	output.innerHTML = `<pre>${content}</pre>`;
}
```

CSS Code:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
	font-size: 14px;
}

.output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/body/wui-body-0.10.js"></script>
```

HTML code:

```html
<section id="myFragment"></section>
<div class="output"><pre>loading content...</pre></div>
```

JS code:

```js
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
```
