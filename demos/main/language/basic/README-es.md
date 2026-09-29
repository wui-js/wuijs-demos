# WUILanguage - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Este demo muestra el uso de la funcionalidad básica de WUILanguage.

## Stack WUI/JS

- WUILanguage - 0.8

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación global.
- [WUILanguage](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-language): Documentación del componente `WUILanguage`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |
| JS   | [languages/main-en.js](./languages/main-en.js) |
| JS   | [languages/main-es.js](./languages/main-es.js) |
| JSON | [languages/main-en.json](./languages/main-en.json) |
| JSON | [languages/main-es.json](./languages/main-es.json) |

## Implementación

Código JSON archivo `main-es.json` (textos en inglés):

```json
{
	"titles": {
		"test": "Test title"
	},
	"texts": {
		"test": "Test text"
	}
}
```

Código JSON archivo `main-es.json` (textos en español):

```json
{
	"titles": {
		"test": "Titulo prueba"
	},
	"texts": {
		"test": "Texto prueba"
	}
}
```

Código JS archivo `main-en.js` (textos en inglés):

```js
return {
	titles: {
		test: "Test title"
	},
	texts: {
		test: "Test text"
	}
};
```

Código JS archivo `main-es.js` (textos en español):

```js
return {
	titles: {
		test: "Titulo prueba"
	},
	texts: {
		test: "Texto prueba"
	}
};
```

> [!IMPORTANT]
> Si se utiliza `js` como formato de los archivos de idioma, dicho archivo debe ser inicializado por la palabra reservada `return` seguido de un objeto `{}`.

> [!TIP]
> Si se desea agregar contenido dinámico dentro de un texto, se recomienda utilizar formato de los archivos de idioma `js` (`mode: "js"`) y agregar el texto mediante el método de interpolación de cadenas, conosido también como literales de plantilla. Por ejemplo, ``mykey: `My ${var} text` ``.
> Alternativamente, se puede utilizar el formato `json` (`mode: "json"`) junto a las propiedades `fixedDictionary` y `langDictionary`, las cuales definen diccionarios de términos cuyas llaves son reemplazadas por su valor al momento de la carga. Puede revisar su uso en el demo [dictionary](../dictionary/README-es.md).

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
	margin: 20px;
}

nav select {
	margin-top: 20px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}
```

Cabecera HTML:

```html
<script type="text/javascript" src="/libraries/wui-js/main/language/wui-language-0.8.js"></script>
```

Código HTML:

```html
<nav>
	<h1 class="wui-language" data-key="titles.test"></h1>
	<div class="wui-language" data-key="texts.test"></div>
	<select>
		<option></option>
		<option value="en">english</option>
		<option value="es">español</option>
	</select>
</nav>
```

Código JS:

```js
const init = () => {
	const dropdown = document.body.querySelector("select");
	const language = new WUILanguage({
		//selector: ".wui-language",
		//directory: "languages/",
		//sets: ["main"],
		//fixedDictionary: {},
		//langDictionary: {},
		lang: "es",
		//mode: "js",
		//dataKey: "key",
		//dataOutput: "text",
		onLoad: (...args) => {
			[lang, languages] = args;
			console.log("Language loaded:", lang, languages);
		}
	});
	let lang = language.lang;
	let languages = {};
	language.load();
	dropdown.addEventListener("change", () => {
		const value = dropdown.value;
		if (value !== "") {
			language.load(value);
		}
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> El archivo de idioma debe estar en la ruta `./languages/main-es.js` o `./languages/main-es.json` según el set, idioma y modo que se emplee. Es importante que los archivos de idioma tengan la forma `{set}-{lang}.{mode}`, en caso contratio, el archivo no podrá ser importado.
