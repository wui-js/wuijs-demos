# WUILanguage - JS load demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUILanguage's basic functionality.

## WUI/JS Stack

- WUILanguage - 0.8

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUILanguage](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-language): `WUILanguage` component documentation.

## Source

| Type | File |
|:----:| ---- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |
| JS   | [languages/main-en.js](./languages/main-en.js) |
| JS   | [languages/main-es.js](./languages/main-es.js) |
| JSON | [languages/main-en.json](./languages/main-en.json) |
| JSON | [languages/main-es.json](./languages/main-es.json) |

## Implementation

JSON code file `main-en.json` (english texts):

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

JSON code file `main-es.json` (spanish texts):

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

JS code file `main-en.js` (english texts):

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

JS code file `main-es.js` (spanish texts):

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
> If `js` is used as the format for language files, said file must be initialized by the `return` keyword followed by a `{}` object.

> [!TIP]
> If you want to add dynamic content within a text, It is recommended to use the `js` language file format (`mode: "js"`) and add the text using the string interpolation method, also known as template literals. I.e. ``mykey: `My ${var} text` ``.
> Alternatively, the `json` format (`mode: "json"`) can be used together with the `fixedDictionary` and `langDictionary` properties, which define dictionaries of terms whose keys are replaced by their value while loading. You can check their use in the [dictionary](../dictionary/README-en.md) demo.

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

HTML head:

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
		//fixedDictionary: {},
		//langDictionary: {},
		lang: "en",
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
> The language file must be in the path `./languages/main-en.js` or `./languages/main-en.json` depending on the set, language and mode used. It is important that language files are in the form `{set}-{lang}.{mode}`, otherwise the file cannot be imported.
