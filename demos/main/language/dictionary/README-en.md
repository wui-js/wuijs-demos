# WUILanguage - Dictionary demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of the WUILanguage term dictionaries through the `fixedDictionary` and `langDictionary` properties.

## WUI/JS Stack

- WUILanguage - 0.8

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUILanguage](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-language): `WUILanguage` component documentation.

## Sources

| Type | File |
|:----:| ---- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |
| JSON | [languages/main-en.json](./languages/main-en.json) |
| JSON | [languages/main-es.json](./languages/main-es.json) |

## Implementation

The `fixedDictionary` and `langDictionary` properties define dictionaries of terms whose keys are replaced by their value when the language files are loaded. This makes it possible to use the `json` mode, which does not support JavaScript variable insertions, instead of the `js` mode.

The keys of `fixedDictionary` are replaced in the texts of every loaded language, whereas those of `langDictionary` are replaced only in the texts of the language they belong to. When the same key is defined in both dictionaries, the one from `langDictionary` prevails.

JSON code of the `main-en.json` file (English texts):

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

JSON code of the `main-es.json` file (Spanish texts):

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
> The replacement is applied only once, while each language file is being loaded. Since already loaded files are not downloaded again, both dictionaries must be defined before the first call to the `load()` method for each set and language.

> [!NOTE]
> A key starting or ending with an alphanumeric character is only replaced when it matches a whole word. For example, the key `app` does not replace the text contained in the word `application`. This restriction does not apply to keys delimited by non-alphanumeric characters, such as `{app}`.

CSS code:

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

HTML header:

```html
<script type="text/javascript" src="/libraries/wui-js/main/language/wui-language-0.8.js"></script>
```

HTML code:

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

JS code:

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
> You can check the basic WUILanguage functionality in the [basic](../basic/README-en.md) demo.
