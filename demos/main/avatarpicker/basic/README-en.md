# WUIAvatarpicker - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUIAvatarpicker's basic functionality.

## WUI/JS Stack

- WUIAvatarpicker - 0.2

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIAvatarpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/avatarpicker/wui-avatarpicker-en.md): `WUIAvatarpicker` component documentation.

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
	align-items: center;
	gap: 10px;
}

.my-avatarpicker {}

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.css">
<script type="text/javascript" src="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-avatarpicker my-avatarpicker">
		<input type="file" accept="image/gif, image/jpeg, image/png">
	</div>
	<div class="output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const avatarpicker = new WUIAvatarpicker({
		selector: ".wui-avatarpicker.my-avatarpicker",
		name: "myAvatar",
		//size: 180,
		//source: "",
		//params: {},
		//minImageSize: 180,
		maxFileSize: 2097152,
		//enabled: true,
		//onRequirePermission: null,
		onInvalid: (type, value, limit) => {
			output.textContent = `Invalid - type: ${type}, value: ${value}, limit: ${limit}`;
		},
		onLoad: (image) => {
			output.textContent = `Load - scale: ${avatarpicker.params.scale}%`;
		}
	});
	avatarpicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.
