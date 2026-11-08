# WUITree - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de las funciones básicas de WUITree.

## Stack WUI/JS

- WUITree - 0.3

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUITree](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tree/wui-tree-es.md): Documentación del componente `WUITree`.

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

.my-tree {}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tree/wui-tree-0.3.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tree/wui-tree-0.3.css">
<script type="text/javascript" src="/libraries/wui-js/main/tree/wui-tree-0.3.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-tree my-tree"></div>
	<div class="output"></div>
</nav>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const tree = new WUITree({
		selector: ".wui-tree.my-tree",
		nodes: [
			{ id: "docs", text: "Documentos", iconType: "folder", opened: true, nodes: [
				{ id: "readme", text: "README.md", iconType: "file" },
				{ id: "changelog", text: "CHANGELOG.md", iconType: "file" }
			]},
			{ id: "src", text: "src", iconType: "folder", nodes: [
				{ id: "main", text: "main.js", iconType: "file" },
				{ id: "legacy", text: "legacy.js", iconType: "file", enabled: false }
			]}
		],
		//target: null,
		onClick: (id, isLeaf, isOpen) => {
			output.textContent = `Clic - nodo: ${id}, hoja: ${isLeaf}, abierto: ${isOpen}`;
		}
	});
	tree.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector no coincide con ningún elemento, `print()` no renderiza el árbol.
