# WUICodebox - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de las funciones básicas de WUICodebox.

## Stack WUI/JS

- WUICodebox - 0.3

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUICodebox](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/codebox/wui-codebox-es.md): Documentación del componente `WUICodebox`.

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

.my-codebox {}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/codebox/wui-codebox-0.3.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/codebox/wui-codebox-0.3.styles.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/codebox/wui-codebox-0.3.css">
<script type="text/javascript" src="/libraries/wui-js/main/codebox/wui-codebox-0.3.js"></script>
```

Código HTML:

```html
<nav>
	<pre class="wui-codebox js my-codebox">
const sum = (a, b) => {
	return a + b;
};
</pre>
</nav>
```

Código JS:

```js
const init = () => {
	const codebox = new WUICodebox({
		selector: ".wui-codebox.my-codebox",
		//type: "txt",
		style: "github",
		//lineNumbering: true,
		//copyButton: true,
		//copyButtonPosition: "top-right"
	});
	codebox.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Los estilos `github`, `vscode` y `xcode` se definen en `wui-codebox-0.3.styles.css`, que debe cargarse junto a `wui-codebox-0.3.css`. El cargador `wui.js` lo carga automáticamente.
