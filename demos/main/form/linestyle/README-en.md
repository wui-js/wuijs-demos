# WUIForm - Line style demo

## Preview

<iframe src="index.html" width="100%" height="500" scrolling="no"></iframe>

## Description

This demo shows the use of WUIForm with line style and native HTML inputs.

## WUI/JS Stack

- WUIIcon - 0.14
- WUIForm - 0.14

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-icon): `WUIIcon` component documentation.
- [WUIForm](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-form): `WUIForm` component documentation.

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
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.14.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.14.css">
<script type="text/javascript" src="/libraries/wui-js/main/form/wui-form-0.14.js"></script>
```

HTML code:

```html
<nav>
	<form name="myForm" class="wui-form my-form line">
		<input type="hidden" name="myHidden">
		<div class="header">Header</div>
		<div class="body scroll">
			<fieldset>
				<legend>Fieldset</legend>
				<div class="field icon-left">
					<div class="icon wui-icon text-left-line"></div>
					<label>Text</label>
					<input type="text" name="text" value="">
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon list-check-line"></div>
					<label>Select</label>
					<select name="select">
						<option value=""></option>
						<option value="value1">value 1</option>
						<option value="value2">value 2</option>
						<option value="value3">value 3</option>
					</select>
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon calendar-line"></div>
					<label>Date</label>
					<input type="date" name="date" value="">
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon time-line"></div>
					<label>Time</label>
					<input type="time" name="time" value="">
				</div>
				<div class="field icon-left autosize">
					<div class="icon wui-icon text-paragraph-line"></div>
					<label for="wuiTextarea">Text area</label>
					<textarea name="textarea"></textarea>
				</div>
				<div class="field icon-left inline noborder">
					<div class="icon wui-icon palette-line"></div>
					<label>Color</label>
					<input type="color" name="color" value="">
				</div>
				<div class="field icon-left noborder">
					<div class="icon wui-icon thermometer-half-line"></div>
					<label>Range</label>
					<input type="range" name="range" value="">
				</div>
				<div class="field icon-left inline noborder">
					<div class="icon wui-icon check-line"></div>
					<label for="checkbox" class="pointer">Checkbox</label>
					<input id="checkbox" type="checkbox" name="checkbox" value="1">
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon chat-left-text-line"></div>
					<label>Data</label>
					<data class="name" value="data">data</data>
				</div>
				<div class="text my-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</div>
				<div class="message highlight center">
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</div>
			</fieldset>
		</div>
		<div class="footer">
			<button class="wui-button cancel">cancel</button>
			<button class="wui-button submit">submit</button>
		</div>
	</form>
</nav>
```

JS Code:

```js
const init = () => {
	const form = new WUIForm({
		selector: ".wui-form.my-form",
		submit: false,
		onScrolling: (top) => { },
		onSubmit: () => { }
	});
	form.init();
}

window.addEventListener("DOMContentLoaded", init);
```
