# WUIForm - Demo estilo relleno

## Previsualización

<iframe src="index.html" width="100%" height="500" scrolling="no"></iframe>

## Descripción

Esta demostración muestra el uso de WUIForm con estilo relleno e inputs HTML nativos.

## Stack WUI/JS

- WUIIcon - 0.13
- WUIForm - 0.13

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-icon): Documentación del componente `WUIIcon`.
- [WUIForm](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-form): Documentación del componente `WUIForm`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |

## Implementación


Código CSS:

```css
body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
	font-size: 14px;
}

nav {
	max-width: 400px;
	height: 400px;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.13.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.13.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.13.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.13.css">
<script type="text/javascript" src="/libraries/wui-js/main/form/wui-form-0.13.js"></script>
```

Código HTML:

```html
<nav>
	<form name="myForm" class="wui-form my-form fill">
		<input type="hidden" name="myHidden">
		<div class="header">Cabecera</div>
		<div class="body scroll">
			<fieldset>
				<legend>Conjunto de campos</legend>
				<div class="field icon-left">
					<div class="icon wui-icon text-left-line"></div>
					<label>Texto</label>
					<input type="text" name="text" value="">
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon list-check-line"></div>
					<label>Selector</label>
					<select name="select">
						<option value=""></option>
						<option value="value1">valor 1</option>
						<option value="value2">valor 2</option>
						<option value="value3">valor 3</option>
					</select>
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon calendar-line"></div>
					<label>Fecha</label>
					<input type="date" name="date" value="">
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon time-line"></div>
					<label>Hora</label>
					<input type="time" name="time" value="">
				</div>
				<div class="field icon-left autosize">
					<div class="icon wui-icon text-paragraph-line"></div>
					<label for="wuiTextarea">Área de texto</label>
					<textarea name="textarea"></textarea>
				</div>
				<div class="field icon-left inline noborder">
					<div class="icon wui-icon palette-line"></div>
					<label>Color</label>
					<input type="color" name="color" value="">
				</div>
				<div class="field icon-left noborder">
					<div class="icon wui-icon thermometer-half-line"></div>
					<label>Rango</label>
					<input type="range" name="range" value="">
				</div>
				<div class="field icon-left inline noborder">
					<div class="icon wui-icon check-line"></div>
					<label for="checkbox" class="pointer">Caja de selección</label>
					<input id="checkbox" type="checkbox" name="checkbox" value="1">
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon chat-left-text-line"></div>
					<label>Dato</label>
					<data class="name" value="dato">dato</data>
				</div>
				<div class="text my-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</div>
				<div class="message highlight center">
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</div>
			</fieldset>
		</div>
		<div class="footer">
			<button class="wui-button cancel">cancel</button>
			<button class="wui-button submit">submit</button>
		</div>
	</form>
</nav>
```

Código JS:

```js
const init = () => {
	const form = new WUIForm({
		selector: ".wui-form.my-form",
		submit: false,
		onScrolling: (top) => { },
		onSubmit: () => { }
	});
	form.init();
}

window.addEventListener("DOMContentLoaded", init);
```
