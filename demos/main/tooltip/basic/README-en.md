# WUITooltip - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUITooltip's basic functionality.

## WUI/JS Stack

- WUITooltip - 0.7

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUITooltip](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tooltip/wui-tooltip-en.md): `WUITooltip` component documentation.

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

.my-container {
	position: relative;
	display: inline-block;
}

.my-container > button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.7.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.7.css">
<script type="text/javascript" src="/libraries/wui-js/main/tooltip/wui-tooltip-0.7.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-tooltip-target my-container">
		<button>Hover me</button>
		<div class="wui-tooltip left">Left tooltip text</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Hover me</button>
		<div class="wui-tooltip top">Top tooltip text</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Hover me</button>
		<div class="wui-tooltip bottom">Bottom tooltip text</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Hover me</button>
		<div class="wui-tooltip bottom nowrap">Bottom nowrap tooltip text</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Hover me</button>
		<div class="wui-tooltip right">Right tooltip text</div>
	</div>
</nav>
```

JS code:

```js
const init = () => {
	const tooltip = new WUITooltip({
		selector: ".wui-tooltip-target.my-container"
	});
	tooltip.init();
}

window.addEventListener("DOMContentLoaded", init);
```
