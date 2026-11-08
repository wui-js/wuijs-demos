# WUIMarkdown - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de las funciones básicas de WUIMarkdown.

## Stack WUI/JS

- WUIMarkdown - 0.3

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIMarkdown](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/markdown/wui-markdown-es.md): Documentación del componente `WUIMarkdown`.

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
	flex-direction: column;
	gap: 10px;
}

.my-markdown {}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/markdown/wui-markdown-0.3.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/markdown/wui-markdown-0.3.texts.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/markdown/wui-markdown-0.3.css">
<script type="text/javascript" src="/libraries/wui-js/main/markdown/wui-markdown-0.3.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-markdown my-markdown"></div>
	<div class="output"></div>
</nav>
```

Código JS:

```js
const init = () => {
	const container = document.body.querySelector(".my-markdown");
	const output = document.body.querySelector(".output");
	const markdown = new WUIMarkdown({
		content: "# Título\n\n## Sección\n\n> [!NOTE]\n> Texto de la nota.",
		lang: "es",
		//strict: true,
		//ignoreTitles: [],
		//includeOrderInTitles: true,
		//includeOrderInMainTitle: false,
		//targetPrefix: "wui-markdown-title",
		//preClass: "wui-codebox",
		//forceAbsolutePaths: false,
		//githubUserContent: false,
		//linkRules: []
	});
	markdown.init();
	const { index, htmlContent } = markdown.parse();
	container.innerHTML = htmlContent;
	output.textContent = `Índice: ${JSON.stringify(index)}`;
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> El contenedor del HTML generado debe tener la clase `wui-markdown` para aplicar los estilos.
