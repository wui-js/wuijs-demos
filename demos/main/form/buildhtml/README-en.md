# WUIForm - buildHtml demo

## Preview

<iframe src="index.html" width="100%" height="500" scrolling="no"></iframe>

## Description

This demo shows how to use `WUIForm`'s `buildHtml()` method to build a form's HTML structure from the declarative
`bodyItems` and `footerItems` properties, instead of writing the markup by hand. The starting `<form>` only carries
the `header`; the `body` (with its fields grouped in a `fieldset`) and the `footer` (with its buttons) are built by
`buildHtml()` when `init()` is called.

The example covers several field types supported by `bodyItems`: `text`, `wui-selectpicker`, `wui-datepicker`,
`textarea` and `wui-switch`. `buildHtml()` only builds the HTML — the interactive behavior of each WUI field
(`WUISelectpicker`, `WUIDatepicker`, `WUISwitch`) is added by instantiating its class over the already-built DOM, same
as with a hand-written form.

## WUI/JS Stack

- WUIIcon - 0.14
- WUIForm - 0.14
- WUISelectpicker - 0.15
- WUIDatepicker - 0.14
- WUISwitch - 0.10
- WUIButton - 0.16

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): General documentation.
- [WUIForm](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-form): `WUIForm` component documentation, including `bodyItems`, `footerItems` and `buildHtml()`.
- [WUISelectpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-selectpicker): `WUISelectpicker` component documentation.
- [WUIDatepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-datepicker): `WUIDatepicker` component documentation.
- [WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-switch): `WUISwitch` component documentation.
- [WUIButton](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-button): `WUIButton` component documentation.

## Sources

| Type | File |
|:----:| ---- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |

## Implementation

CSS code:

```css
body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
	font-size: 14px;
}

nav {
	max-width: 400px;
	height: 400px;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/icon/wui-icon-0.14.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/icon/wui-icon-0.14.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/form/wui-form-0.14.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/form/wui-form-0.14.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/datepicker/wui-datepicker-0.14.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/datepicker/wui-datepicker-0.14.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/switch/wui-switch-0.10.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/switch/wui-switch-0.10.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/button/wui-button-0.16.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/button/wui-button-0.16.css">
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/form/wui-form-0.14.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/datepicker/wui-datepicker-0.14.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/switch/wui-switch-0.10.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/button/wui-button-0.16.js"></script>
```

HTML code:

```html
<nav>
	<form name="myForm" class="wui-form my-form fill">
		<div class="header">New user</div>
	</form>
	<div class="output"></div>
</nav>
```

JS code:

```js
const wuiComponents = {};

const bodyItems = [{
	items: [
		{
			name: "nickname",
			type: "text",
			label: "Nickname",
			icon: { class: "wui-icon person-line" }
		}, {
			name: "role",
			type: "wui-selectpicker",
			label: "Role",
			icon: { class: "wui-icon shield-line" },
			options: [
				{ value: "user", text: "User" },
				{ value: "admin", text: "Admin" }
			]
		}, {
			name: "birth",
			type: "wui-datepicker",
			label: "Birth date",
			icon: { class: "wui-icon calendar-line" }
		}, {
			name: "bio",
			type: "textarea",
			label: "Bio",
			autosize: true,
			icon: { class: "wui-icon file-text-line" }
		}, {
			name: "active",
			type: "wui-switch",
			label: "Active",
			inputId: "activeInput",
			value: "1",
			noborder: true
		}
	]
}];

const footerItems = [
	{ class: "wui-button cancel", text: "cancel" },
	{ class: "wui-button submit", text: "accept" }
];

const printOutput = data => {
	const output = document.querySelector(".output");
	output.innerHTML = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
};

const init = () => {
	wuiComponents.form = new WUIForm({
		selector: ".wui-form.my-form",
		bodyItems,
		footerItems,
		submit: false,
		onSubmit: () => {
			const data = Object.fromEntries(wuiComponents.form.getFormData());
			printOutput(data);
		}
	});
	wuiComponents.form.init();
	wuiComponents.role = new WUISelectpicker({
		selector: ".wui-selectpicker",
		onOpen: () => { closePickers("role"); }
	});
	wuiComponents.birth = new WUIDatepicker({
		selector: ".wui-datepicker",
		boxAlign: "right",
		onOpen: () => { closePickers("birth"); }
	});
	wuiComponents.active = new WUISwitch({
		selector: ".wui-switch"
	});
	wuiComponents.cancelButton = new WUIButton({
		selector: ".wui-button.cancel",
		onClick: () => { wuiComponents.form.reset(); printOutput({}); }
	});
	wuiComponents.submitButton = new WUIButton({
		selector: ".wui-button.submit",
		submit: true
	});
	Object.values(wuiComponents).forEach(component => {
		component.init();
	});
};

const closePickers = excludeId => {
	Object.entries(wuiComponents).forEach(([id, component]) => {
		if (component.constructor.name.match(/picker/i) && id !== excludeId && component.close) {
			component.close();
		}
	});
};

window.addEventListener("DOMContentLoaded", init);
```
