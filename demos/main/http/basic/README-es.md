# WUIHttp - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de las funciones básicas de WUIHttp.

## Stack WUI/JS

- WUIHttp - 0.2

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIHttp](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/http/wui-http-es.md): Documentación del componente `WUIHttp`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |
| JSON | [data.json](./data.json) |

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

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.output {
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

```html
<script type="text/javascript" src="/libraries/wui-js/main/http/wui-http-0.2.js"></script>
```

Código HTML:

```html
<nav>
	<button class="load-text">Texto</button>
	<button class="load-json">JSON</button>
	<button class="cancel">Cancelar</button>
</nav>
<div class="output"></div>
```

Código JSON (`data.json`):

```json
{
	"name": "WUIHttp",
	"version": "0.1"
}
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const http = new WUIHttp({
		//token: null
	});
	let controller = null;
	document.body.querySelector(".load-text").addEventListener("click", async () => {
		controller = new AbortController();
		try {
			const content = await http.getUrlContent({
				url: "./data.json",
				//method: "GET",
				//token: "",
				//headers: {},
				//body: "",
				responseType: "text",
				signal: controller.signal,
				onProgress: ({ loaded, total }) => {
					output.textContent = `Progreso - ${loaded} / ${total} bytes`;
				}
			});
			output.textContent = `Texto - contenido: ${content}`;
		} catch (error) {
			output.textContent = `Error - ${error}`;
		}
	});
	document.body.querySelector(".load-json").addEventListener("click", async () => {
		controller = new AbortController();
		try {
			const data = await http.responseJson({
				url: "./data.json",
				signal: controller.signal
			});
			output.textContent = `JSON - nombre: ${data.name}, versión: ${data.version}`;
		} catch (error) {
			output.textContent = `Error - ${error}`;
		}
	});
	document.body.querySelector(".cancel").addEventListener("click", () => {
		if (controller) {
			controller.abort();
		}
	});
}

window.addEventListener("DOMContentLoaded", init);
```
