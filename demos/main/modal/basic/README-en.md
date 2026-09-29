# WUIModal - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUIModal's basic functionality.

## WUI/JS Stack

- WUIIcon - 0.13
- WUIModal - 0.12

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-icon): `WUIIcon` component documentation.
- [WUIModal](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-modal): `WUIModal` component documentation.

## Source

| Type | File |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |

## Implementation

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

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

nav > button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}

.my-modal > .box > .body > p {
	text-align: center;
}

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.13.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.13.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.12.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.12.css">
<script type="text/javascript" src="/libraries/wui-js/main/modal/wui-modal-0.12.js"></script>
```

HTML code:

```html
<nav>
	<button class="open">open modal</button>
	<div class="output"></div>
</nav>
<div class="wui-modal my-modal page">
	<div class="box">
		<div class="header">
			<div class="topbar"></div>
			<div class="title">Modal Title</div>
			<div class="close wui-icon close-lg-line"></div>
		</div>
		<div class="body">
			<p>Modal content...</p>
		</div>
		<div class="footer">
			Footer
		</div>
	</div>
</div>
```

JS code:

```js
const init = () => {
	const button = document.querySelector("button.open");
	const output = document.body.querySelector(".output");
	const modal = new WUIModal({
		selector: ".wui-modal.my-modal",
		//openDelay: 200,
		onStartOpen: () => {
			output.textContent = "Opening modal";
		},
		onOpen: () => {
			output.textContent = "Modal opened";
		},
		//onMaximize: null,
		//onScrolling: null,
		onStartClose: () => {
			output.textContent = "Closing modal";
		},
		onClose: () => {
			output.textContent = "Modal closed";
		}
		//onBack: null
	});
	modal.init();
	button.addEventListener("click", () => {
		modal.open();
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.
