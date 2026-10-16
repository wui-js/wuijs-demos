# WUILoader - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUILoader's basic functionality.

## WUI/JS Stack

- WUILoader - 0.7

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUILoader](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/loader/wui-loader-en.md): `WUILoader` component documentation.

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

nav > div .text {
	margin-top: 10px;
	text-align: center;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/loader/wui-loader-0.7.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/loader/wui-loader-0.7.css">
<script type="text/javascript" src="/libraries/wui-js/main/loader/wui-loader-0.7.js"></script>
```

HTML code:

```html
<nav>
	<div>
		<div class="wui-loader my-loader-ring"></div>
		<div class="text">ring</div>
	</div>
	<div>
		<div class="wui-loader my-loader-dualring"></div>
		<div class="text">dualring</div>
	</div>
	<div>
		<div class="wui-loader my-loader-spinner"></div>
		<div class="text">spinner</div>
	</div>
	<div>
		<div class="wui-loader my-loader-roller"></div>
		<div class="text">roller</div>
	</div>
	<div>
		<div class="wui-loader my-loader-ellipsis"></div>
		<div class="text">ellipsis</div>
	</div>
	<div>
		<div class="wui-loader my-loader-grid"></div>
		<div class="text">grid</div>
	</div>
</nav>
```

JS code:

```js
const wuiComponents = {};

const init = () => {
	["ring", "dualring", "spinner", "roller", "ellipsis", "grid"].forEach(style => {
		wuiComponents[style+"Loader"] = new WUILoader({
			selector: `.wui-loader.my-loader-${style}`,
			style,
			//size: 60
		});
		wuiComponents[style+"Loader"].init();
	});
}

window.addEventListener("DOMContentLoaded", init);
```
