# WUIFormat - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400"></iframe>

## Descripción

Esta demostración muestra el uso de WUIFormat para formateo de números, cadenas y fechas.

## Stack WUI/JS

- WUIFormat - 0.6

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIFormat](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-format): Documentación del utilidades `WUIFormat`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |

## Implementación


Código CSS:

```css
.output {
	position: relative;
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

```html
<script type="text/javascript" src="/libraries/wui-js/main/format/wui-format-0.6.js"></script>
```

HTML code:

```html
<h2>Number methods</h2>
<div class="output numberFormatting"></div>
<div class="output numberSizeFormatting"></div>
<div class="output numberModule11Formatting"></div>
<div class="output numberModule23Formatting"></div>

<h2>String methods</h2>
<div class="output stringDateValidation"></div>
<div class="output stringEmailValidation"></div>
<div class="output stringURLValidation"></div>
<div class="output stringIPv4Validation"></div>
<div class="output stringModule11Validation"></div>
<div class="output stringModule23Validation"></div>
<div class="output stringNIDValidation"></div>

<h2>Date methods</h2>
<div class="output dateLocalFormatting"></div>
<div class="output dateUTCFormatting"></div>
```

Código JS:

```js
// Métodos de números

const numberInitDefaults = () => {
	//Number.prototype.wuiDefaults.numberPrefix = "";
	//Number.prototype.wuiDefaults.numberSufix = "";
	Number.prototype.wuiDefaults.thousandsSeparator = ".";
	Number.prototype.wuiDefaults.decimalLength = 2;
	Number.prototype.wuiDefaults.decimalSeparator = ",";
}

const numberFormatting = () => {
	const inputValue = 1234.567;
	const output = document.body.querySelector(".output.numberFormatting");
	const outputValue = inputValue.wuiToString({ numberPrefix: "$ " });
	output.innerHTML = "<pre>"
		+ `<b>Formateo numérico</b>\n`
		+ `valor entrada : ${inputValue}\n`
		+ `valor salida  : ${outputValue}\n`
		+ "</pre>";
}

const numberSizeFormatting = () => {
	const inputValue = 1234.567;
	const output = document.body.querySelector(".output.numberSizeFormatting");
	const outputValue = inputValue.wuiToSizeString({});
	output.innerHTML = "<pre>"
		+ `<b>Formateo numérico de tamaño digital</b>\n`
		+ `valor entrada : ${inputValue}\n`
		+ `valor salida  : ${outputValue}\n`
		+ "</pre>";
}

const numberModule11Formatting = () => {
	const inputValue = 1234567;
	const inputCode10 = "K";
	const output = document.body.querySelector(".output.numberModule11Formatting");
	const outputValue = inputValue.wuiToModule11(inputCode10);
	output.innerHTML = "<pre>"
		+ `<b>Formateo numérico de módulo 11</b>\n`
		+ `valor entrada     : ${inputValue}\n`
		+ `código 10 entrada : ${inputCode10}\n`
		+ `valor salida      : ${outputValue}\n`
		+ "</pre>";
}

const numberModule23Formatting = () => {
	const inputValue = 1234567;
	const inputMap = "TRWAGMYFPDXBNJZSQVHLCKET";
	const output = document.body.querySelector(".output.numberModule23Formatting");
	const outputValue = inputValue.wuiToModule23(inputMap);
	output.innerHTML = "<pre>"
		+ `<b>Numeric module 23 formatting</b>\n`
		+ `valor entrada : ${inputValue}\n`
		+ `mapa entrada  : ${inputMap}\n`
		+ `valor salida  : ${outputValue}\n`
		+ "</pre>";
}

// Métodos de cadenas

const stringDateValidation = () => {
	const inputFormat = "yyyy-mm-dd";
	const inputValue = "2023-12-31";
	const output = document.body.querySelector(".output.stringDateValidation");
	const outputValid = inputValue.wuiValidateDate(inputFormat);
	output.innerHTML = "<pre>"
		+ `<b>Validación de fecha</b>\n`
		+ `formato entrada   : ${inputFormat}\n`
		+ `valor entrada     : ${inputValue}\n`
		+ `validación salida : ${outputValid}\n`
		+ "</pre>";
}

const stringEmailValidation = () => {
	const inputValue = "test@example.com";
	const output = document.body.querySelector(".output.stringEmailValidation");
	const outputValid = inputValue.wuiValidateEmail();
	output.innerHTML = "<pre>"
		+ `<b>Validación de correo</b>\n`
		+ `valor entrada     : ${inputValue}\n`
		+ `validación salida : ${outputValid}\n`
		+ "</pre>";
}

const stringURLValidation = () => {
	const inputValue = "https://www.example.com";
	const output = document.body.querySelector(".output.stringURLValidation");
	const outputValid = inputValue.wuiValidateUrl();
	output.innerHTML = "<pre>"
		+ `<b>Validación de URL</b>\n`
		+ `valor entrada     : ${inputValue}\n`
		+ `validación salida : ${outputValid}\n`
		+ "</pre>";
}

const stringIPv4Validation = () => {
	const inputValue = "127.0.0.1";
	const output = document.body.querySelector(".output.stringIPv4Validation");
	const outputValid = inputValue.wuiValidateIpv4();
	output.innerHTML = "<pre>"
		+ `<b>Validación de IP v4</b>\n`
		+ `valor entrada     : ${inputValue}\n`
		+ `validación salida : ${outputValid}\n`
		+ "</pre>";
}

const stringModule11Validation = () => {
	const inputValue = "1234567-4";
	const inputCode10 = "K";
	const output = document.body.querySelector(".output.stringModule11Validation");
	const outputValid = inputValue.wuiValidateModule11(inputCode10);
	output.innerHTML = "<pre>"
		+ `<b>Validación de módulo 11</b>\n`
		+ `valor entrada     : ${inputValue}\n`
		+ `código 10 entrada : ${inputCode10}\n`
		+ `validación salida : ${outputValid}\n`
		+ "</pre>";
}

const stringModule23Validation = () => {
	const inputValue = "1234567-L";
	const inputMap = "TRWAGMYFPDXBNJZSQVHLCKET";
	const output = document.body.querySelector(".output.stringModule23Validation");
	const outputValid = inputValue.wuiValidateModule23(inputMap);
	output.innerHTML = "<pre>"
		+ `<b>Validación de módulo 23</b>\n`
		+ `valor entrada     : ${inputValue}\n`
		+ `mapa entrada      : ${inputMap}\n`
		+ `validación salida : ${outputValid}\n`
		+ "</pre>";
}

const stringNIDValidation = () => {
	const inputValue = "1.234.567-4";
	const inputCountryCode = "CL";
	const output = document.body.querySelector(".output.stringNIDValidation");
	const outputValid = inputValue.wuiValidateNid(inputCountryCode);
	output.innerHTML = "<pre>"
		+ `<b>Validación de DNI</b>\n`
		+ `valor entrada       : ${inputValue}\n`
		+ `código país entrada : ${inputCountryCode}\n`
		+ `validación salida   : ${outputValid}\n`
		+ "</pre>";
}

// Métodos de fechas

const dateInitDefaults = () => {
	//Date.prototype.wuiDefaults.utc = false;
	//Date.prototype.wuiDefaults.locales = "en-US";
	//Date.prototype.wuiDefaults.dateFormat = "yyyy-mm-dd";
	//Date.prototype.wuiDefaults.timeFormat = "hh:MM:ss";
	//Date.prototype.wuiDefaults.datetimeFormat = "yyyy-mm-dd hh:MM:ss";
	//Date.prototype.wuiDefaults.formatDelimiters = ["[", "]"];
}

const dateLocalFormatting = () => {
	const inputFormat = "yyyy-mm-dd";
	const inputValue = "2023-12-31";
	const date = new Date().wuiLoad(inputValue, inputFormat);
	const output = document.body.querySelector(".output.dateLocalFormatting");
	const outputFormat = "dd/mm/yyyy hh:MM [GMT]zz";
	const outputValue = date.wuiToString(outputFormat, { utc: false });
	output.innerHTML = "<pre>"
		+ `<b>Formateo de fecha local</b>\n`
		+ `formato entrada : ${inputFormat}\n`
		+ `valor entrada   : ${inputValue}\n`
		+ `fecha local     : ${date}\n`
		+ `formato salida  : ${outputFormat}\n`
		+ `valor salida    : ${outputValue}\n`
		+ "</pre>";
}

const dateUTCFormatting = () => {
	const inputFormat = "yyyy-mm-dd";
	const inputValue = "2023-12-31";
	const date = new Date().wuiLoad(inputValue, inputFormat);
	const output = document.body.querySelector(".output.dateUTCFormatting");
	const outputFormat = "dd/mm/yyyy hh:MM [GMT]zz";
	const outputValue = date.wuiToString(outputFormat, { utc: true });
	output.innerHTML = "<pre>"
		+ `<b>Formateo de fecha UTC</b>\n`
		+ `formato entrada : ${inputFormat}\n`
		+ `valor entrada   : ${inputValue}\n`
		+ `fecha utc       : ${date}\n`
		+ `formato salida  : ${outputFormat}\n`
		+ `valor salida    : ${outputValue}\n`
		+ "</pre>";
}

// Inicio

window.addEventListener("DOMContentLoaded", () => {

	numberInitDefaults();
	numberFormatting();
	numberSizeFormatting();
	numberModule11Formatting();

	stringDateValidation();
	stringEmailValidation();
	stringURLValidation();
	stringIPv4Validation();
	stringModule11Validation();
	stringModule23Validation();
	stringNIDValidation();

	dateInitDefaults();
	dateLocalFormatting();
	dateUTCFormatting();
});
```
