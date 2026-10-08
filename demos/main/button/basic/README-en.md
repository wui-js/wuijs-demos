# WUIButton - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUIButton's basic functionality.

## WUI/JS Stack

- WUIIcon - 0.14
- WUIButton - 0.16

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-icon): `WUIIcon` component documentation.
- [WUIButton](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-button): `WUIButton` component documentation.

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

.my-button {
	margin: 20px;
}

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.16.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.16.css">
<script type="text/javascript" src="/libraries/wui-js/main/button/wui-button-0.16.js"></script>
```

HTML code:

```html
<nav>
	<button class="wui-button my-button button1"></button>
	<button class="wui-button my-button button2"></button>
	<div class="output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const button1 = new WUIButton({
		selector: ".wui-button.button1",
		//iconClass: null,
		//iconImage: null,
		//text: "button 1",
		//textClass: null,
		//textData: null,
		//submit: false,
		//warning: false,
		//flat: false,
		//selectable: false,
		//locked: false,
		//enabled: true,
		onClick: (selected) => {
			output.textContent = "Click button 1";
		},
		onDblClick: (selected) => {
			output.textContent = "Double-Click button 1";
		}
	});
	const button2 = new WUIButton({
		selector: ".wui-button.button2",
		//iconClass: "wui-icon float-left mappointer-fill",
		//text: "button 2",
		//submit: true,
		onClick: (selected) => {
			output.textContent = "Click button 2";
		},
		onDblClick: (selected) => {
			output.textContent = "Double-Click button 2";
		}
	});
	button1.init();
	button2.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLButtonElement`, the object will not be initialized.
