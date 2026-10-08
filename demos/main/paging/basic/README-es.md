# WUIPaging - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de las funciones básicas de WUIPaging.

## Stack WUI/JS

- WUIPaging - 0.12

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIPaging](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-paging): Documentación del componente `WUIPaging`.

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

.my-paging {
	position: absolute;
}

.my-paging > .page > nav {
	position: absolute;
	top: 50%;
	left: 50%;
	display: flex;
	gap: 10px;
	transform: translate(-50%, -50%);
}

.my-paging > .page > nav > button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}

.output {
	position: absolute;
	left: 0;
	bottom: 0;
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link rel="stylesheet" type="text/css" href="/libraries/wui-js/main/paging/wui-paging-0.12.root.css">
<link rel="stylesheet" type="text/css" href="/libraries/wui-js/main/paging/wui-paging-0.12.css">
<script type="text/javascript" src="/libraries/wui-js/main/paging/wui-paging-0.12.js"></script>
```

Código HTML:

```html
<div class="wui-paging my-paging">
	<div class="page scroll" data-target="page1">
		<h1>Página 1</h1>
		<nav>
			<button class="go-page2">ir a la página 2 &#9205;</button>
		</nav>
	</div>
	<div class="page scroll" data-target="page2">
		<h1>Página 2</h1>
		<nav>
			<button class="go-page1">&#9204; ir a la página 1</button>
			<button class="back">&#8630; volver</button>
			<button class="go-page3">ir a la página 3 &#9205;</button>
		</nav>
	</div>
	<div class="page scroll" data-target="page3">
		<h1>Página 3</h1>
		<nav>
			<button class="go-page2">&#9204; ir a la página 2</button>
			<button class="back">&#8630; volver</button>
		</nav>
	</div>
</div>

<div class="output"></div>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const paging = new WUIPaging({
		selector: ".wui-paging.my-paging",
		//index: null,
		//dataTarget: "target",
		onSelect: (inputIndex, inputTarget, outputIndex, outputTarget) => {
			output.textContent = `Seleccionando página: ${inputTarget} (${inputIndex})`;
		},
		onChange: (index, target) => {
			output.textContent = `Cambio completado a: ${target} (${index})`;
		},
		onBack: (index, target) => {
			output.textContent = `Retroceso a: ${target} (${index})`;
		},
		onScrolling: (scroll) => {
			output.textContent = `Scroll en: ${scroll}px`;
		}
	});
	paging.init();
	["page1", "page2", "page3"].forEach(target => {
		document.querySelectorAll(".go-" + target).forEach(button => {
			button.addEventListener("click", () => {
				paging.select(target);
			});
		})
	});
	document.querySelectorAll("button.back").forEach(button => {
		button.addEventListener("click", () => {
			paging.back();
		});
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!NOTE]
> Las páginas pueden tener la clase `scroll` para permitir scroll vertical. El componente soporta dos modos de transición: movimiento lateral (predeterminado) o por opacidad (agregando la clase `opacity` al contenedor principal).
