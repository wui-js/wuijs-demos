# WUIButton - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de las funciones básicas de WUIButton.

## Stack WUI/JS

- WUIIcon - 0.14
- WUIButton - 0.16

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-icon): Documentación del componente `WUIIcon`.
- [WUIButton](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-button): Documentación del componente `WUIButton`.

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

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-button {
	margin: 20px;
}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.16.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.16.css">
<script type="text/javascript" src="/libraries/wui-js/main/button/wui-button-0.16.js"></script>
```

Código HTML:

```html
<nav>
	<button class="wui-button my-button button1"></button>
	<button class="wui-button my-button button2"></button>
	<div class="output"></div>
</nav>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const button1 = new WUIButton({
		selector: ".wui-button.button1",
		//iconClass: null,
		//iconImage: null,
		//text: "botón 1",
		//textClass: null,
		//textData: null,
		//submit: false,
		//warning: false,
		//flat: false,
		//selectable: false,
		//locked: false,
		//enabled: true,
		onClick: (selected) => {
			output.textContent = "Clic button 1";
		},
		onDblClick: (selected) => {
			output.textContent = "Double-Clic button 1";
		}
	});
	const button2 = new WUIButton({
		selector: ".wui-button.button2",
		//iconClass: "wui-icon float-left mappointer-fill",
		//text: "botón 2",
		//submit: true,
		onClick: () => {
			output.textContent = "Clic button 2";
		},
		onDblClick: () => {
			output.textContent = "Double-Clic button 2";
		}
	});
	button1.init();
	button2.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLButtonElement`, el objeto no se inicializará.
