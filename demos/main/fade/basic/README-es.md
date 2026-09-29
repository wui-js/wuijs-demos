# WUIFade - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de las funciones básicas de WUIFade.

## Stack WUI/JS

- WUIFade - 0.6

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIFade](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-fade): Documentación de las utilidades `WUIFade`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |

## Implementación

Código CSS:

```CSS
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

nav button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}

.my-element {
	display: none;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 64px;
	height: 64px;
	margin-top: 32px;
	margin-left: -32px;
	background-color: red;
}
```

Cabecera HTML:

```html
<script type="text/javascript" src="/libraries/wui-js/main/fade/wui-fade-0.6.js"></script>
```

Código HTML:

```html
<nav>
	<button class="fadein">fade-in</button>
	<button class="fadeout">fade-out</button>
	<div id="myElement" class="my-element"></div>
</nav>
```

Código JS:
```js
const init = () => {
	const element = document.getElementById("myElement");
	const fadeinButton = document.querySelector("button.fadein");
	const fadeoutButton = document.querySelector("button.fadeout");
	const options = {
		delay: 200,
		//display: "block"
	};
	fadeinButton.addEventListener("click", () => {
		element.wuiFadein(options);
		// o alternativamente
		//WUIFade.in(element, options);
	});
	fadeoutButton.addEventListener("click", () => {
		element.wuiFadeout(options);
		// o alternativamente
		//WUIFade.out(element, options);
	});
}

window.addEventListener("DOMContentLoaded", init);
```
