# WUIDatepicker - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUIDatepicker's basic functionality.

## WUI/JS Stack

- WUIIcon - 0.14
- WUIDatepicker - 0.14

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-icon): `WUIIcon` component documentation.
- [WUIDatepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-datepicker): `WUIDatepicker` component documentation.

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

.my-datepicker {
	max-width: 130px;
}

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/datepicker/wui-datepicker-0.14.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/datepicker/wui-datepicker-0.14.css">
<script type="text/javascript" src="/libraries/wui-js/main/datepicker/wui-datepicker-0.14.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-datepicker my-datepicker">
		<input type="date" name="myDate">
	</div>
	<div class="output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const datepicker = new WUIDatepicker({
		selector: ".wui-datepicker.my-datepicker",
		//locale: "en-US",
		value: "2026-01-01",
		//min: "",
		//max: "",
		//monthsNames: [],
		//weekDaysNames: [],
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
	datepicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.
