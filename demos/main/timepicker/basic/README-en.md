# WUITimepicker - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUITimepicker's basic functionality.

## WUI/JS Stack

- WUITimepicker - 0.13

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUITimepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-timepicker): `WUITimepicker` component documentation.

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
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-timepicker {
	max-width: 90px;
}

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.css">
<script type="text/javascript" src="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-timepicker my-timepicker">
		<input type="time" name="myTime">
	</div>
	<div class="output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const timepicker = new WUITimepicker({
		selector: ".wui-timepicker.my-timepicker",
		//lang: "en",
		value: "10:30",
		//min: "00:00",
		//max: "23:59",
		//texts: {},
		//openDirection: "down",
		//boxAlign: "left",
		//hidden: false,
		//enabled: true,
		onOpen: (value) => {
			output.textContent = `Opened - value: ${value}`;
		},
		onChange: (value) => {
			output.textContent = `Changed - value: ${value}`;
		},
		onClose: (value) => {
			output.textContent = `Closed - value: ${value}`;
		}
	});
	timepicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.
