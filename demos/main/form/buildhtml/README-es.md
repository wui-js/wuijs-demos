# WUIForm - Demo buildHtml

## Previsualización

<iframe src="index.html" width="100%" height="500" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso del método `buildHtml()` de `WUIForm` para construir la estructura HTML de un
formulario a partir de las propiedades declarativas `bodyItems` y `footerItems`, en vez de escribir el marcado a mano.
El `<form>` de partida solo trae la cabecera (`header`); el cuerpo (`body`, con sus campos agrupados en `fieldset`) y
el pie (`footer`, con sus botones) los construye `buildHtml()` al llamar a `init()`.

El ejemplo cubre distintos tipos de campo soportados por `bodyItems`: `text`, `wui-selectpicker`, `wui-datepicker`,
`textarea` y `wui-switch`. `buildHtml()` solo construye el HTML — la interactividad de cada campo WUI (`WUISelectpicker`,
`WUIDatepicker`, `WUISwitch`) se agrega instanciando sus clases sobre el DOM ya construido, igual que en un formulario
escrito a mano.

## Stack WUI/JS

- WUIIcon - 0.13
- WUIForm - 0.13
- WUISelectpicker - 0.14
- WUIDatepicker - 0.13
- WUISwitch - 0.10
- WUIButton - 0.15

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIForm](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md#wui-form): Documentación del componente `WUIForm`, incluyendo `bodyItems`, `footerItems` y `buildHtml()`.
- [WUISelectpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md#wui-selectpicker): Documentación del componente `WUISelectpicker`.
- [WUIDatepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md#wui-datepicker): Documentación del componente `WUIDatepicker`.
- [WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md#wui-switch): Documentación del componente `WUISwitch`.
- [WUIButton](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md#wui-button): Documentación del componente `WUIButton`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |

## Implementación

Código CSS:

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

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/icon/wui-icon-0.13.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/icon/wui-icon-0.13.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/form/wui-form-0.13.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/form/wui-form-0.13.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/selectpicker/wui-selectpicker-0.14.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/selectpicker/wui-selectpicker-0.14.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/datepicker/wui-datepicker-0.13.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/datepicker/wui-datepicker-0.13.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/switch/wui-switch-0.10.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/switch/wui-switch-0.10.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/button/wui-button-0.15.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/button/wui-button-0.15.css">
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/form/wui-form-0.13.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/selectpicker/wui-selectpicker-0.14.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/datepicker/wui-datepicker-0.13.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/switch/wui-switch-0.10.js"></script>
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/button/wui-button-0.15.js"></script>
```

Código HTML:

```html
<nav>
	<form name="myForm" class="wui-form my-form fill">
		<div class="header">New user</div>
	</form>
	<div class="output"></div>
</nav>
```

Código JS:

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
