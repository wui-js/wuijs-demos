# WUIList - Demo de grupo de botones y paginación con cubierta deslizable

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de la funcionalidad de paginación de WUIList mediante botones HTML.  
El grupo de botones laterales con tapa extraíble está configurado con dos botones: uno asociado con una posible función de edición y el otro con la de eliminación.  
Los datos de la lista se cargan directamente durante la creación del componente.

## Stack WUI/JS

- WUIIcon - 0.13
- WUIList - 0.10

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-icon): Documentación del componente `WUIIcon`.
- [WUIList](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-list): Documentación del componente `WUIList`.

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

header {
	display: flex;
	width: 600px;
	margin: 10px;
	justify-content: flex-end;
	align-items: center;
	gap: 5px;
}

header > button {
	min-width: 30px;
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}

header > button.disabled {
	color: #ccc;
}

header > span {
	margin-left: 10px;
	font-size: 14px;
}

nav {
	width: 600px;
	margin: 10px;
}

footer {
	width: 600px;
}

.output {
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.13.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.13.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/list/wui-list-0.10.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/list/wui-list-0.10.css">
<script type="text/javascript" src="/libraries/wui-js/main/list/wui-list-0.10.js"></script>
```

Código HTML:

```html
<header>
	<button class="first">&#9198;</button>
	<button class="prev">&#9204;</button>
	<button class="next">&#9205;</button>
	<button class="last">&#9197;</button>
	<span class="paging"></span>
</header>
<nav>
	<div class="wui-list my-list"></div>
</nav>
<footer>
	<div class="output"></div>
</footer>
```

Código JS:

```js
const init = () => {
	const firstButton = document.body.querySelector("header > button.first");
	const prevButton = document.body.querySelector("header > button.prev");
	const nextButton = document.body.querySelector("header > button.next");
	const lastButton = document.body.querySelector("header > button.last");
	const paging = document.body.querySelector("header > .paging");
	const output = document.body.querySelector("footer > .output");
	const list = new WUIList({
		selector: ".wui-list.my-list",
		paging: 5,
		columns: [{
			width: 10
		}, {
			width: 60,
			align: "center"
		}, {
			align: "left"
		}, {
			width: 60,
			align: "center"
		}],
		rows: [{
			id: "row1", data: ["", "A 1", "B 1", "C 1"]}, {
			id: "row2", data: ["", "A 2", "B 2", "C 2"], enabled: false}, {
			id: "row3", data: ["", "A 3", "B 3", "C 3"]}, {
			id: "row4", data: ["", "A 4", "B 4", "C 4"]}, {
			id: "row5", data: ["", "A 5", "B 5", "C 5"]}, {
			id: "row6", data: ["", "A 6", "B 6", "C 6"]}, {
			id: "row7", data: ["", "A 7", "B 7", "C 7"]}, {
			id: "row8", data: ["", "A 8", "B 8", "C 8"]}, {
			id: "row9", data: ["", "A 9", "B 9", "C 9"]}, {
			id: "row10", data: ["", "A 10", "B 10", "C 10"]}, {
			id: "row11", data: ["", "A 11", "B 11", "C 11"]}, {
			id: "row12", data: ["", "A 12", "B 12", "C 12"]
		}],
		buttons: [{
			iconClass: "wui-icon pencil-fill",
			bgcolor: "#1e90ff",
			onClick: (index, id) => {
				output.textContent = `Clic botón editar - índice: ${index}, id: ${id}`;
			},
			enabled: true
		}, {
			iconClass: "wui-icon trash-fill",
			bgcolor: "#f44343",
			onClick: (index, id) => {
				output.textContent = `Clic botón borrar - índice: ${index}, id: ${id}`;
			},
			enabled: true
		}],
		buttonsStyle: "stretch",
		onPrint: (page, pages, total) => {
			if (list.hasPrevPage()) {
				firstButton.classList.remove("disabled");
				prevButton.classList.remove("disabled");
			} else {
				firstButton.classList.add("disabled");
				prevButton.classList.add("disabled");
			}
			if (list.hasNextPage()) {
				lastButton.classList.remove("disabled");
				nextButton.classList.remove("disabled");
			} else {
				lastButton.classList.add("disabled");
				nextButton.classList.add("disabled");
			}
			paging.innerHTML = `${page}/${pages} (${total})`;
		},
		onClick: (index, id, enabled, options) => {
			output.textContent = `Clic fila - índice: ${index}, id: ${id}, enabled: ${enabled}`;
		}
	});
	list.init();
	firstButton.addEventListener("click", () => {
		if (!firstButton.classList.contains("disabled")) {
			list.firstPage();
		}
	});
	prevButton.addEventListener("click", () => {
		if (!prevButton.classList.contains("disabled")) {
			list.prevPage();
		}
	});
	lastButton.addEventListener("click", () => {
		if (!lastButton.classList.contains("disabled")) {
			list.lastPage();
		}
	});
	nextButton.addEventListener("click", () => {
		if (!nextButton.classList.contains("disabled")) {
			list.nextPage();
		}
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.
