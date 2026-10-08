# WUIMenubar - Demo submenú

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de la funcionalidad de submenú de WUIMenubar.

## Stack WUI/JS

- WUIIcon - 0.14
- WUIMenubar - 0.10

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-icon): Documentación del componente `WUIIcon`.
- [WUIMenubar](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-menubar): Documentación del componente `WUIMenubar`.

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

.output {
	position: absolute;
	top: 10px;
	left: 10px;
	right: 10px;
	text-align: right;
	font-family: monospace;
}

@media screen and (max-width: 767px) {
	.output {
		text-align: center:
	}
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.10.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.10.css">
<script type="text/javascript" src="/libraries/wui-js/main/menubar/wui-menubar-0.10.js"></script>
```

Cuerpo HTML:

```html
<div class="wui-menubar my-menubar"></div>
<div class="output"></div>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const menubar = new WUIMenubar({
		selector: ".wui-menubar.my-menubar",
		centered: false,
		separations: true,
		//compacted: false,
		//expansive: true,
		autoClose: false,
		//hiddenPassiveBorder: false,
		topButtons: [{
			id: "logo",
			iconImage: "https://wuijs.dev/Images/Logo/wuijs-isotype-color.svg",
			label: "WUI /JS Lib",
			tooltipable: false,
			selectable: false
		}],
		mainButtons: [{
			id: "home",
			iconClass: "wui-icon home-fill",
			label: "Inicio",
			selected: true
		}, {
			id: "tools",
			iconClass: "wui-icon pencil-fill",
			label: "Herramientas",
			buttons: [{
				id: "users",
				iconClass: "wui-icon palette-fill",
				label: "Colores"
			}, {
				id: "zoomin",
				iconClass: "wui-icon zoomin-line",
				label: "Zoom in"
			}, {
				id: "zoomout",
				iconClass: "wui-icon zoomout-line",
				label: "Zoom out"
			}, {
				id: "images",
				iconClass: "wui-icon image-fill",
				label: "Imágenes"
			}]
		}, {
			id: "settings",
			iconClass: "wui-icon gear-fill",
			label: "Configuración",
			selectable: false
		}, {
			id: "account",
			iconClass: "wui-icon person-circle-fill",
			photoImage: "",
			label: "Cuenta",
			selectable: false
		}, {
			id: "notifications",
			iconClass: "wui-icon bell-fill",
			label: "Notificaciones",
			radio: false
		}],
		bottomButtons: [{
			id: "logout",
			iconClass: "wui-icon logout-line",
			label: "Cerrar sesión",
			selectable: false
		}],
		onClick: (id) => {
			output.textContent = `Clic - id botón: "${id}"`;
		},
		onSelect: (id) => {
			output.textContent = `Selección - id botón: "${id}"`;
		}
	});
	menubar.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.
