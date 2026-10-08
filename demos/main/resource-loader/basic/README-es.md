# WUI Resource Loader - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Este demo muestra el uso del script WUI Resource Loader.

## Stack WUI/JS

- WUI/JS Main Lib - 0.16.0
- WUISelectpicker - 0.15
- WUISwitch - 0.10

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación global.
- [Resource Loader](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md#abbreviated): Documentación de implementación abreviada.
- [WUISelectpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md#wui-selectpicker): Documentación del componente `WUISelectpicker`.
- [WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md#wui-switch): Documentación del componente `WUISwitch`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |

## Implementación

Código CSS:

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

Cabecera HTML:

```html
<script type="text/javascript" src="/libraries/wui-js/main/wui.js?v=0.16.0&c=selectpicker,switch"></script>
```

> [!NOTE]
> El parámetro `class` no distingue entre mayúsculas y minúsculas.

Código JS:

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
