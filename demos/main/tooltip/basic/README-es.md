# WUITooltip - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de las funciones básicas de WUITooltip.

## Stack WUI/JS

- WUITooltip - 0.6

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUITooltip](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tooltip/wui-tooltip-es.md): Documentación del componente `WUITooltip`.

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
	height: 100%;
	justify-content: center;
	align-items: center;
	gap: 20px;
}

.my-container {
	position: relative;
	display: inline-block;
}

.my-container > button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.css">
<script type="text/javascript" src="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-tooltip-target my-container">
		<button>Pasa el cursor aquí</button>
		<div class="wui-tooltip left">Texto del tooltip izquierda</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Pasa el cursor aquí</button>
		<div class="wui-tooltip top">Texto del tooltip arriba</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Pasa el cursor aquí</button>
		<div class="wui-tooltip bottom">Texto del tooltip abajo</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Pasa el cursor aquí</button>
		<div class="wui-tooltip bottom nowrap">Texto del tooltip abajo sin quiebre</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Pasa el cursor aquí</button>
		<div class="wui-tooltip right">Texto del tooltip derecha</div>
	</div>
</nav>
```

Código JS:

```js
const init = () => {
	const tooltip = new WUITooltip({
		selector: ".wui-tooltip-target.my-container"
	});
	tooltip.init();
}

window.addEventListener("DOMContentLoaded", init);
```
