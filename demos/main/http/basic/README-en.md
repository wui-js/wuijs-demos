# WUIHttp - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUIHttp's basic functionality.

## WUI/JS Stack

- WUIHttp - 0.2

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIHttp](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/http/wui-http-en.md): `WUIHttp` component documentation.

## Source

| Type | File |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |
| JSON | [data.json](./data.json) |

## Implementation

CSS code:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

body {
	font-size: 14px;
}

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/http/wui-http-0.2.js"></script>
```

HTML code:

```html
<nav>
	<button class="load-text">Text</button>
	<button class="load-json">JSON</button>
	<button class="cancel">Cancel</button>
</nav>
<div class="output"></div>
```

JSON code (`data.json`):

```json
{
	"name": "WUIHttp",
	"version": "0.1"
}
```

JS code:

```js
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
```
