# WUIPluginThemes - Cambio de modo

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Este demo muestra el uso de la funcionalidad de cambio entre modo claro y oscuro de WUIPluginThemes.

## Stack WUI/JS

- WUIPluginThemes - 0.12
- WUISwitch - 0.10

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación global.
- [WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-switch): Documentación del componente `WUISwitch`.
- [WUI/JS Plugins Lib](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/README-es.md): Documentación global.
- [WUIPluginThemes](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/README-en.md#wui-plugin-themes): Documentación del componente `WUIPluginThemes`.

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
	align-items: center;
	gap: 10px;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/main/switch/wui-switch-0.10.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/plugins/themes/wuiplugin-themes-0.12.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/plugins/themes/default/settings-0.15.css">
<script type="text/javascript" src="./libraries/wui-js/main/switch/wui-switch-0.10.js"></script>
<script type="text/javascript" src="./libraries/wui-js/plugins/themes/wuiplugin-themes-0.12.js"></script>
```

Código HTML:

```html
<body class="wuiplugin-themes default light">
	<nav>
		<div class="wui-switch my-switch">
			<input type="checkbox" name="mySwitch">
		</div>
	</nav>
</body>
```

Código JS:

```js
const init = () => {
	const themes = new WUIPluginThemes();
	const switchbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1",
		activated: false,
		onChange: (value, activated) => {
			themes.setScheme(activated ? "dark" : "light");
		}
	});
	switchbox.init();
}

window.addEventListener("DOMContentLoaded", init);
```
