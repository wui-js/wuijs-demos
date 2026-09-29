# WUILanguage - Demo diccionario

## Previsualización

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Descripción

Este demo muestra el uso de los diccionarios de términos de WUILanguage mediante las propiedades `fixedDictionary` y `langDictionary`.

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
| JSON | [languages/main-en.json](./languages/main-en.json) |
| JSON | [languages/main-es.json](./languages/main-es.json) |

## Implementación

Las propiedades `fixedDictionary` y `langDictionary` definen diccionarios de términos cuyas llaves son reemplazadas por su valor al momento de cargar los archivos de idioma. Esto permite emplear el modo `json`, que no admite inserciones de variables JavaScript, en lugar del modo `js`.

Las llaves de `fixedDictionary` se reemplazan en los textos de todos los idiomas cargados, mientras que las de `langDictionary` se reemplazan solo en los textos del idioma al que pertenecen. Cuando una misma llave está definida en ambos diccionarios, prevalece la de `langDictionary`.

Código JSON archivo `main-en.json` (textos en inglés):

```json
{
	"titles": {
		"test": "{greeting}, welcome to {app}"
	},
	"texts": {
		"test": "{app} version {version} is licensed under {license}."
	}
}
```

Código JSON archivo `main-es.json` (textos en español):

```json
{
	"titles": {
		"test": "{greeting}, bienvenido a {app}"
	},
	"texts": {
		"test": "La versión {version} de {app} está licenciada bajo {license}."
	}
}
```

> [!IMPORTANT]
> El reemplazo se aplica una única vez, durante la carga de cada archivo de idioma. Dado que los archivos ya cargados no se vuelven a descargar, ambos diccionarios deben estar definidos antes de la primera llamada al método `load()` de cada conjunto e idioma.

> [!NOTE]
> Una llave que comienza o termina con un carácter alfanumérico solo se reemplaza cuando coincide con una palabra completa. Por ejemplo, la llave `app` no reemplaza el texto contenido en la palabra `application`. Esta restricción no aplica a las llaves delimitadas por caracteres no alfanuméricos, como `{app}`.

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
		fixedDictionary: {
			"{app}": "WUI/JS",
			"{version}": "0.14.2",
			"{license}": "Apache License 2.0"
		},
		langDictionary: {
			en: {
				"{greeting}": "Hello"
			},
			es: {
				"{greeting}": "Hola"
			}
		},
		lang: "en",
		mode: "json",
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

> [!TIP]
> Puede revisar el uso de la funcionalidad básica de WUILanguage en el demo [basic](../basic/README-es.md).
