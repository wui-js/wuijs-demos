# WUIForm - WUI inputs demo

## Preview

<iframe src="index.html" width="100%" height="500" scrolling="no"></iframe>

## Description

This demo shows the use of WUIForm with fill style and WUI inputs components.

## WUI/JS Stack

- WUIIcon - 0.13
- WUIForm - 0.13
- WUISelectpicker - 0.14
- WUIDatepicker - 0.13
- WUITimepicker - 0.12
- WUIColorpicker - 0.10
- WUISwitch - 0.10
- WUIIntensity - 0.7
- WUIButton - 0.15

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-icon): `WUIIcon` component documentation.
- [WUIForm](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-form): `WUIForm` component documentation.
- [WUISelectpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-selectpicker): `WUISelectpicker` component documentation.
- [WUIDatepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-datepicker): `WUIDatepicker` component documentation.
- [WUITimepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-timepicker): `WUITimepicker` component documentation.
- [WUIColorpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-colorpicker): `WUIColorpicker` component documentation.
- [WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-switch): `WUISwitch` component documentation.
- [WUIIntensity](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-intensity): `WUIIntensity` component documentation.
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

body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
	font-size: 14px;
}

nav {
	max-width: 400px;
	height: 400px;
}
```

HTML Head:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/icon/wui-icon-0.13.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/icon/wui-icon-0.13.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/form/wui-form-0.13.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/form/wui-form-0.13.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/selectpicker/wui-selectpicker-0.10.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/selectpicker/wui-selectpicker-0.10.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/datepicker/wui-datepicker-0.13.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/datepicker/wui-datepicker-0.13.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/timepicker/wui-timepicker-0.12.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/timepicker/wui-timepicker-0.12.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/colorpicker/wui-colorpicker-0.10.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/colorpicker/wui-colorpicker-0.10.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/switch/wui-switch-0.10.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/switch/wui-switch-0.10.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/intensity/wui-intensity-0.4.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/intensity/wui-intensity-0.4.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/button/wui-button-0.9.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/button/wui-button-0.9.css">
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/form/wui-form-0.13.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/selectpicker/wui-selectpicker-0.10.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/datepicker/wui-datepicker-0.13.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/timepicker/wui-timepicker-0.12.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/colorpicker/wui-colorpicker-0.10.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/switch/wui-switch-0.10.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/intensity/wui-intensity-0.4.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/button/wui-button-0.9.js"></script>
```

HTML code:

```html
<nav>
	<form name="myForm" class="wui-form my-form fill">
		<input type="hidden" name="myHidden">
		<div class="header">Header</div>
		<div class="body scroll">
			<fieldset>
				<legend>Fieldset</legend>
				<div class="field icon-left">
					<div class="icon wui-icon list-check-line"></div>
					<label>Selectpicker</label>
					<div class="wui-selectpicker my-selectpicker">
						<select name="select">
							<option value=""></option>
							<option value="value1">value 1</option>
							<option value="value2">value 2</option>
							<option value="value3">value 3</option>
						</select>
					</div>
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon calendar-line"></div>
					<label>Datepicker</label>
					<div class="wui-datepicker my-datepicker"><input type="date" name="date" value=""></div>
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon time-line"></div>
					<label>Timepicker</label>
					<div class="wui-timepicker my-timepicker"><input type="time" name="time" value=""></div>
				</div>
				<div class="field icon-left inline noborder">
					<div class="icon wui-icon palette-line"></div>
					<label>Color</label>
					<div class="wui-colorpicker my-colorpicker"><input type="color" name="color" value=""></div>
				</div>
				<div class="field icon-left inline noborder">
					<div class="icon wui-icon clipboard-check-line"></div>
					<label for="checkbox" class="pointer">Switch</label>
					<div class="wui-switch my-switch"><input id="checkbox" type="checkbox" name="checkbox" value="1"></div>
				</div>
				<div class="field icon-left inline noborder">
					<div class="icon wui-icon thermometer-half-line"></div>
					<label for="intensity" class="pointer">Intensity</label>
					<div class="wui-intensity my-intensity"><input id="intensity" type="range" name="intensity" value="1"></div>
				</div>
			</fieldset>
		</div>
		<div class="footer">
			<button class="wui-button accept submit">accept</button>
			<button class="wui-button cancel">cancel</button>
		</div>
	</form>
</nav>
```

JS Code:

```js
const wuiComponents = {};

const init = () => {
	wuiComponents.form = new WUIForm({
		selector: ".wui-form.my-form",
		submit: false
	});
	wuiComponents.selectpicker = new WUISelectpicker({
		selector: ".wui-selectpicker.my-selectpicker",
		value: "2",
		onOpen: () => { closePickers("selectpicker"); }
	});
	wuiComponents.datepicker = new WUIDatepicker({
		selector: ".wui-datepicker.my-datepicker",
		value: "2026-02-20",
		boxAlign: "right",
		onOpen: () => { closePickers("datepicker"); }
	});
	wuiComponents.timepicker = new WUITimepicker({
		selector: ".wui-timepicker.my-timepicker",
		value: "12:00",
		boxAlign: "right",
		onOpen: () => { closePickers("timepicker"); }
	});
	wuiComponents.colorpicker = new WUIColorpicker({
		selector: ".wui-colorpicker.my-colorpicker",
		value: "#ff0000",
		boxAlign: "right",
		onOpen: () => { closePickers("colorpicker"); }
	});
	wuiComponents.switchbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1"
	});
	wuiComponents.intensity = new WUIIntensity({
		selector: ".wui-intensity.my-intensity",
		value: "1"
	});
	wuiComponents.cancelButton = new WUIButton({
		selector: ".wui-button.cancel",
		onClick: () => { }
	});
	wuiComponents.submitButton = new WUIButton({
		selector: ".wui-button.submit",
		onClick: () => { }
	});
	Object.values(wuiComponents).forEach((component) => {
		component.init();
	});
}

const closePickers = (excludeId) => {
	Object.entries(wuiComponents).forEach(([id, component]) => {
		if (component.constructor.name.match(/picker/i) && id !== excludeId && component.close) {
			component.close();
		}
	});
}

window.addEventListener("DOMContentLoaded", init);
```
