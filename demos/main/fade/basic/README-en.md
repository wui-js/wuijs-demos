# WUIFade - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUIFade's basic functionality.

## WUI/JS Stack

- WUIFade - 0.6

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIFade](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-fade): `WUIFade` utilities documentation.

## Source

| Type | File |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |

## Implementation

CSS code:

```CSS
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
	height: 100%;
	justify-content: center;
	align-items: center;
	gap: 20px;
}

nav button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}

.my-element {
	display: none;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 64px;
	height: 64px;
	margin-top: 32px;
	margin-left: -32px;
	background-color: red;
}
```

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/fade/wui-fade-0.6.js"></script>
```

HTML code:

```html
<nav>
	<button class="fadein">fade-in</button>
	<button class="fadeout">fade-out</button>
	<div id="myElement" class="my-element"></div>
</nav>
```

JS code:
```js
const init = () => {
	const element = document.getElementById("myElement");
	const fadeinButton = document.querySelector("button.fadein");
	const fadeoutButton = document.querySelector("button.fadeout");
	const options = {
		delay: 200,
		//display: "block"
	};
	fadeinButton.addEventListener("click", () => {
		element.wuiFadein(options);
		// or alternatively
		//WUIFade.in(element, options);
	});
	fadeoutButton.addEventListener("click", () => {
		element.wuiFadeout(options);
		// or alternatively
		//WUIFade.out(element, options);
	});
}

window.addEventListener("DOMContentLoaded", init);
```
