# WUITabs - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de las funciones básicas de WUITabs.

## Stack WUI/JS

- WUIIcon - 0.14
- WUITabs - 0.7

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-icon): Documentación del componente `WUIIcon`.
- [WUITabs](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-tabs): Documentación del componente `WUITabs`.

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

nav {
	position: absolute;
	top: 20px;
	left: 20px;
	right: 20px;
	bottom: 20px;
}

.my-tabs {
	height: 100%;
}

.my-tabs .page {
	padding-top: 40px;
	justify-content: center;
}

.my-tabs .page1 {
	height: 150%;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.7.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.7.css">
<script type="text/javascript" src="/libraries/wui-js/main/tabs/wui-tabs-0.7.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-tabs mobile my-tabs">
		<div class="bar">
			<div class="tab">
				<div class="icon wui-icon wui-icon-home"></div>
				<div class="text">Inicio</div>
			</div>
			<div class="tab">
				<div class="icon wui-icon wui-icon-user"></div>
				<div class="text">Perfil</div>
			</div>
			<div class="tab">
				<div class="icon wui-icon wui-icon-settings"></div>
				<div class="text">Ajustes</div>
			</div>
		</div>
		<div class="body scroll">
			<div class="page page1">Contenido página 1</div>
			<div class="page">Contenido página 2</div>
			<div class="page">Contenido página 3</div>
		</div>
	</div>
</nav>
```

Código JS:

```js
const init = () => {
	const tabs = new WUITabs({
		selector: ".wui-tabs.my-tabs",
		//layout: "top",
		//index: 0
	});
	tabs.init();
}

window.addEventListener("DOMContentLoaded", init);
```
