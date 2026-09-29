# WUIModal - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de las funciones básicas de WUIModal.

## Stack WUI/JS

- WUIIcon - 0.13
- WUIModal - 0.12

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-icon): Documentación del componente `WUIIcon`.
- [WUIModal](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-modal): Documentación del componente `WUIModal`.

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

nav > button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}

.my-modal > .box > .body > p {
	text-align: center;
}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.13.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.13.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.12.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.12.css">
<script type="text/javascript" src="/libraries/wui-js/main/modal/wui-modal-0.12.js"></script>
```

Código HTML:

```html
<nav>
	<button class="open">abrir modal</button>
	<div class="output"></div>
</nav>
<div class="wui-modal my-modal page">
	<div class="box">
		<div class="header">
			<div class="topbar"></div>
			<div class="title">Título del Modal</div>
			<div class="close wui-icon close-lg-line"></div>
		</div>
		<div class="body">
			<p>Contenido del modal...</p>
		</div>
		<div class="footer">
			Pié de página
		</div>
	</div>
</div>
```

Código JS:

```js
const init = () => {
	const button = document.querySelector("button.open");
	const output = document.body.querySelector(".output");
	const modal = new WUIModal({
		selector: ".wui-modal.my-modal",
		//openDelay: 200,
		onStartOpen: () => {
			output.textContent = "Abriendo modal";
		},
		onOpen: () => {
			output.textContent = "Modal abierto";
		},
		//onMaximize: null,
		//onScrolling: null,
		onStartClose: () => {
			output.textContent = "Cerrando modal";
		},
		onClose: () => {
			output.textContent = "Modal cerrado";
		}
		//onBack: null
	});
	modal.init();
	button.addEventListener("click", () => {
		modal.open();
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.
