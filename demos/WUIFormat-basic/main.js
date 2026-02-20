// Number format

const numberDefaults = () => {
	//Number.prototype.wuiDefaults.numberPrefix = "";
	//Number.prototype.wuiDefaults.numberSufix = "";
	//Number.prototype.wuiDefaults.thousandsSeparator = ",";
	Number.prototype.wuiDefaults.decimalLength = 2;
	//Number.prototype.wuiDefaults.decimalSeparator = ".";
}

const numberFormatting = () => {
	const inputValue = 1234.567;
	const output = document.body.querySelector(".my-output.number");
	const outputValue = inputValue.wuiToString({ numberPrefix: "$ " });
	output.innerHTML = "<pre>"
		+ `<b>Numeric formatting</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output value : ${outputValue}\n`
		+ "</pre>";
}

const numberSizeFormatting = () => {
	const inputValue = 1234.567;
	const output = document.body.querySelector(".my-output.numberSize");
	const outputValue = inputValue.wuiToSizeString({});
	output.innerHTML = "<pre>"
		+ `<b>Numeric digital size formatting</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output value : ${outputValue}\n`
		+ "</pre>";
}

const numberModule11Formatting = () => {
	const inputValue = 1234567;
	const inputCode10 = "K";
	const output = document.body.querySelector(".my-output.numberModule11");
	const outputValue = inputValue.wuiToModule11(inputCode10);
	output.innerHTML = "<pre>"
		+ `<b>Numeric module 11 formatting</b>\n`
		+ `input value    : ${inputValue}\n`
		+ `input code 10  : ${inputCode10}\n`
		+ `output value   : ${outputValue}\n`
		+ "</pre>";
}

const numberModule23Formatting = () => {
	const inputValue = 1234567;
	const inputMap = "TRWAGMYFPDXBNJZSQVHLCKET";
	const output = document.body.querySelector(".my-output.numberModule23");
	const outputValue = inputValue.wuiToModule23(inputMap);
	output.innerHTML = "<pre>"
		+ `<b>Numeric module 23 formatting</b>\n`
		+ `input value    : ${inputValue}\n`
		+ `input map      : ${inputMap}\n`
		+ `output value   : ${outputValue}\n`
		+ "</pre>";
}

// String format

const stringDateValidation = () => {
	const inputFormat = "yyyy-mm-dd";
	const inputValue = "2023-12-31";
	const output = document.body.querySelector(".my-output.stringDateValidation");
	const outputValid = inputValue.wuiValidateDate(inputFormat);
	output.innerHTML = "<pre>"
		+ `<b>Date validation</b>\n`
		+ `input format : ${inputFormat}\n`
		+ `input value  : ${inputValue}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringEmailValidation = () => {
	const inputValue = "test@example.com";
	const output = document.body.querySelector(".my-output.stringEmailValidation");
	const outputValid = inputValue.wuiValidateEmail();
	output.innerHTML = "<pre>"
		+ `<b>Email validation</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringURLValidation = () => {
	const inputValue = "https://www.example.com";
	const output = document.body.querySelector(".my-output.stringURLValidation");
	const outputValid = inputValue.wuiValidateURL();
	output.innerHTML = "<pre>"
		+ `<b>URL validation</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringIPv4Validation = () => {
	const inputValue = "127.0.0.1";
	const output = document.body.querySelector(".my-output.stringIPv4Validation");
	const outputValid = inputValue.wuiValidateIPv4();
	output.innerHTML = "<pre>"
		+ `<b>IPv4 validation</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringModule11Validation = () => {
	const inputValue = "1234567-4";
	const inputCode10 = "K";
	const output = document.body.querySelector(".my-output.stringModule11Validation");
	const outputValid = inputValue.wuiValidateModule11(inputCode10);
	output.innerHTML = "<pre>"
		+ `<b>Module 11 validation</b>\n`
		+ `input value   : ${inputValue}\n`
		+ `input code 10 : ${inputCode10}\n`
		+ `output valid  : ${outputValid}\n`
		+ "</pre>";
}

const stringModule23Validation = () => {
	const inputValue = "1234567-L";
	const inputMap = "TRWAGMYFPDXBNJZSQVHLCKET";
	const output = document.body.querySelector(".my-output.stringModule23Validation");
	const outputValid = inputValue.wuiValidateModule23(inputMap);
	output.innerHTML = "<pre>"
		+ `<b>Module 23 validation</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `input map    : ${inputMap}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringNIDValidation = () => {
	const inputValue = "1234567";
	const inputCountryCode = "CL";
	const output = document.body.querySelector(".my-output.stringNIDValidation");
	const outputValid = inputValue.wuiValidateNID(inputCountryCode);
	output.innerHTML = "<pre>"
		+ `<b>NID validation</b>\n`
		+ `input value        : ${inputValue}\n`
		+ `input country code : ${inputCountryCode}\n`
		+ `output valid       : ${outputValid}\n`
		+ "</pre>";
}

// Date format

const dateLocalFormatting = () => {
	const inputFormat = "yyyy-mm-dd";
	const inputValue = "2023-12-31";
	const date = new Date().wuiLoad(inputValue, inputFormat);
	const output = document.body.querySelector(".my-output.dateLocal");
	const outputFormat = "dd/mm/yyyy hh:MM [GMT]zz";
	const outputValue = date.wuiToString(outputFormat, { utc: false });
	output.innerHTML = "<pre>"
		+ `<b>Local date formatting</b>\n`
		+ `input format  : ${inputFormat}\n`
		+ `input value   : ${inputValue}\n`
		+ `local date    : ${date}\n`
		+ `output format : ${outputFormat}\n`
		+ `output value  : ${outputValue}\n`
		+ "</pre>";
}

const dateUTCFormatting = () => {
	const inputFormat = "yyyy-mm-dd";
	const inputValue = "2023-12-31";
	const date = new Date().wuiLoad(inputValue, inputFormat);
	const output = document.body.querySelector(".my-output.dateUTC");
	const outputFormat = "dd/mm/yyyy hh:MM [GMT]zz";
	const outputValue = date.wuiToString(outputFormat, { utc: true });
	output.innerHTML = "<pre>"
		+ `<b>UTC date formatting</b>\n`
		+ `input format  : ${inputFormat}\n`
		+ `input value   : ${inputValue}\n`
		+ `utc date      : ${date}\n`
		+ `output format : ${outputFormat}\n`
		+ `output value  : ${outputValue}\n`
		+ "</pre>";
}

// Init

window.addEventListener("DOMContentLoaded", () => {
	numberDefaults();
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
	dateLocalFormatting();
	dateUTCFormatting();
});