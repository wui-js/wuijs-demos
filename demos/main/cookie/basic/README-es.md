# WUICookie - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Este demo muestra el uso de la funcionalidad básica de WUICookie.

## Stack WUI/JS

- WUICookie - 0.6

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación global.
- [WUICookie](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/cookie/wui-cookie-es.md): Documentación del componente `WUICookie`.

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
	font-size: 14px;
}

.output {
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

```html
<script type="text/javascript" src="/libraries/wui-js/main/cookie/wui-cookie-0.6.js"></script>
```

Código HTML:

```html
<div class="output"></div>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const cookie = new WUICookie({
		//domain: location.hostname,
		//path: "./",
		//minutes: 365*24*60,
		//overssl: false
	});
	const encode = cookie.set("mycookie", "test");
	const value = cookie.get("mycookie");
	output.innerHTML = "<pre>"
		+ `Value codificado : ${encode}\n`
		+ `Value leído.     : ${value}\n`
		+ "</pre>";
}

window.addEventListener("DOMContentLoaded", init);
```
