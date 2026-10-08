# WUI Resource Loader - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of the WUI Resource Loader script.

## WUI/JS Stack

- WUI/JS Main Lib - 0.16.0
- WUISelectpicker - 0.15
- WUISwitch - 0.10

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [Resource Loader](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#abbreviated): Abbreviated implementation documentation.
- [WUISelectpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-selectpicker): `WUISelectpicker` component documentation.
- [WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-switch): `WUISwitch` component documentation.

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

.my-selectpicker {
	max-width: 200px;
}
```

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/wui.js?v=0.16.0&c=selectpicker,switch"></script>
```

> [!NOTE]
> The `class` parameter does not distinguish between uppercase and lowercase.

JS code:

```js
const wuiComponents = {};

const init = () => {
	wuiComponents.selectpicker = new WUISelectpicker({
		selector: ".wui-selectpicker.my-selectpicker",
		value: "2"
	});
	wuiComponents.switchbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1"
	});
	Object.values(wuiComponents).forEach((component) => {
		component.init();
	});
}

window.addEventListener("wuiLoad", init);
```
