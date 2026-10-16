# WUIAvatarpicker - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de las funciones básicas de WUIAvatarpicker.

## Stack WUI/JS

- WUIAvatarpicker - 0.2

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIAvatarpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/avatarpicker/wui-avatarpicker-es.md): Documentación del componente `WUIAvatarpicker`.

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

.my-avatarpicker {}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.css">
<script type="text/javascript" src="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-avatarpicker my-avatarpicker">
		<input type="file" accept="image/gif, image/jpeg, image/png">
	</div>
	<div class="output"></div>
</nav>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const avatarpicker = new WUIAvatarpicker({
		selector: ".wui-avatarpicker.my-avatarpicker",
		name: "myAvatar",
		//size: 180,
		//source: "",
		//params: {},
		//minImageSize: 180,
		maxFileSize: 2097152,
		//enabled: true,
		//onRequirePermission: null,
		onInvalid: (type, value, limit) => {
			output.textContent = `Inválido - tipo: ${type}, valor: ${value}, límite: ${limit}`;
		},
		onLoad: (image) => {
			output.textContent = `Carga - escala: ${avatarpicker.params.scale}%`;
		}
	});
	avatarpicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.
