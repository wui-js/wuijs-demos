# WUIIcon - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400"></iframe>

## Descripción

Esta demostración muestra el uso básico de WUIIcon.

## Stack WUI/JS

- WUIIcon - 0.14

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-icon): Documentación del conjunto de íconos `WUIIcon`.

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
	height: 100%;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 20px;
}

nav > .icon {
	width: 24px;
	height: 24px;
	margin: 10px;
}

nav button {
	--button-transform: translate(-50%, -50%);
	position: absolute;
	top: 50%;
	left: 50%;
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
	-webkit-transform: var(--button-transform);
	-moz-transform: var(--button-transform);
	transform: var(--button-transform);
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.css">
<script type="text/javascript" src="/libraries/wui-js/main/icon/wui-icon-0.14.js"></script>
```

Código HTML:

```html
<nav>
	<div class="icon wui-icon wuijs-fill"></div>
	<div class="icon wui-icon wuijs-color"></div>
	<button>cargar todos</button>
</nav>
```

Código HTML:

```html
<nav></nav>
```

Código JS:
```js
const init = () => {
	const conteiner = document.querySelector("nav");
	const button = document.querySelector("button");
	const names = WUIIcon.getNames();
	button.addEventListener("click", () => {
		conteiner.innerHTML = "";
		names.forEach(name => {
			const icon = document.createElement("div");
			icon.className = `icon wui-icon ${name}`;
			icon.title = name;
			conteiner.append(icon);
		});
	});
}

window.addEventListener("DOMContentLoaded", init);
```
