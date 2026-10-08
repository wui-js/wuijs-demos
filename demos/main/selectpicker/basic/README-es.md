# WUISelectpicker - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de las funciones básicas de WUISelectpicker.  
Carga la opciones del selector mediante lectura de los elementos `<option>` del DOM.

## Stack WUI/JS

- WUISelectpicker - 0.15

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUISelectpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md#wui-selectpicker): Documentación del componente `WUISelectpicker`.

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
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-selectpicker {
	max-width: 200px;
}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/selectpicker/wui-selectpicker-0.11.root.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/libraries/wui-js/main/selectpicker/wui-selectpicker-0.11.css">
<script type="text/javascript" src="https://wuijs.dev/libraries/wui-js/main/selectpicker/wui-selectpicker-0.11.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-selectpicker my-selectpicker">
		<select name="mySelectpicker">
			<option value=""></option>
			<option value="1">Opción 1</option>
			<option value="2">Opción 2</option>
			<option value="3">Opción 3</option>
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
			<option value="6">Option 6</option>
			<option value="7">Option 7</option>
			<option value="8">Option 8</option>
			<option value="9">Option 9</option>
			<option value="10">Option 10</option>
			<option value="11">Option 11</option>
			<option value="12">Option 12</option>
			<option value="13">Option 13</option>
			<option value="14">Option 14</option>
			<option value="15">Option 15</option>
			<option value="16">Option 16</option>
			<option value="17">Option 17</option>
			<option value="18">Option 18</option>
			<option value="19">Option 19</option>
		</select>
	</div>
	<div class="output"></div>
</nav>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const selectpicker = new WUISelectpicker({
		selector: ".wui-selectpicker.my-selectpicker",
		lang: "es",
		//options: [],
		value: "2",
		//texts: {},
		//openDirection: "down",
		//boxAlign: "center",
		//required: true,
		//hidden: false,
		//autochange: true,
		//multiple: false,
		//separatorValue: ",",
		//separatorText: ", ",
		//filterable: true,
		//viewicon: false,
		//viewtext: true,
		//enabled: true,
		onOpen: (value) => {
			output.textContent = `Apertura - valor: ${value}`;
		},
		onChange: (value) => {
			output.textContent = `Cambio - valor: ${value}`;
		},
		onClose: (value) => {
			output.textContent = `Cierre - valor: ${value}`;
		}
	});
	selectpicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.
