# WUIBody - Demo de importación

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Este demo muestra el uso de la funcionalidad de importación de WUIBody.

## Stack WUI/JS

- WUIBody - 0.10

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación global.
- [WUIBody](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-body): Documentación del componente `WUIBody`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |
| CSS  | [fragments/my-fragment/fragment.css](./fragments/my-fragment/fragment.css) |
| HTML | [fragments/my-fragment/fragment.htm](./fragments/my-fragment/fragment.htm) |
| JS   | [fragments/my-fragment/fragment.js](./fragments/my-fragment/fragment.js) |

## Implementación

Contenido CSS del archivo `./fragments/my-fragment/fragment.css`:

```css
.my-fragment {
	margin: 10px;
}

.my-fragment a,
.my-fragment a:visited {
	text-decoration: none;
	font-size: 20px;
	color: blue;
}
```

Contenido HTML del archivo `./fragments/my-fragment/fragment.htm`:

```html
<section id="myFragment" class="my-fragment">
	<a href="https://www.google.com">Google!</a><a href="https://wuijs.dev" target="_blank">go to WUI/JS Project website!</a>
</section>
```

Contenido JS del archivo `./fragments/my-fragment/fragment.js`:

```js
const myFragmentContentLog = (content) => {
	const output = document.body.querySelector(".output");
	output.innerHTML = `<pre>${content}</pre>`;
}
```

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

.output {
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

```html
<script type="text/javascript" src="/libraries/wui-js/main/body/wui-body-0.10.js"></script>
```

Código HTML:

```html
<section id="myFragment"></section>
<div class="output"><pre>cargando contenido...</pre></div>
```

Código JS:

```js
const init = () => {
	const body = new WUIBody({
		//environment: "web",
		importDirectory: "./fragments/",
		//importMode: "fetch",
		onCompleted: () => {
			body.prepare();
		},
		debug: true
	});
	body.import("myFragment", "my-fragment/fragment", () => {
		myFragmentContentLog("contenido de prueba cargado");
	});
}

window.addEventListener("DOMContentLoaded", init);
```
