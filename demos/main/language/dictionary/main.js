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
