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
		+ `input value  : ${inputValue}\n`
		+ `output value : ${outputValue}\n`
		+ "</pre>";
}

// Email validation

const emailValidation = () => {
	const email = "test@example.com";
	const output = document.body.querySelector(".my-output.email");
	const valid = email.wuiValidateEmail();
	output.innerHTML = "<pre>"
		+ `input value : ${email}\n`
		+ `valid       : ${valid}\n`
		+ "</pre>";
}

// Local date/time formatting

const localDateFormatting = () => {
	const inputValue = "2023-12-31";
	const inputFormat = "yyyy-mm-dd";
	const date = new Date().wuiLoad(inputValue, inputFormat);
	const output = document.body.querySelector(".my-output.localDate");
	const format = "dd/mm/yyyy hh:MM [GMT]zz";
	const outputValue = date.wuiToString(format, { utc: false });
	output.innerHTML = "<pre>"
		+ `input format  : ${inputFormat}\n`
		+ `input value   : ${inputValue}\n`
		+ `local date    : ${date}\n`
		+ `output format : ${format}\n`
		+ `output value  : ${outputValue}\n`
		+ "</pre>";
}

const utcDateFormatting = () => {
	const inputValue = "2023-12-31";
	const inputFormat = "yyyy-mm-dd";
	const date = new Date().wuiLoad(inputValue, inputFormat);
	const output = document.body.querySelector(".my-output.utcDate");
	const format = "dd/mm/yyyy hh:MM [GMT]zz";
	const outputValue = date.wuiToString(format, { utc: true });
	output.innerHTML = "<pre>"
		+ `input format  : ${inputFormat}\n`
		+ `input value   : ${inputValue}\n`
		+ `utc date      : ${date}\n`
		+ `output format : ${format}\n`
		+ `output value  : ${outputValue}\n`
		+ "</pre>";
}

// Init

window.addEventListener("DOMContentLoaded", () => {
	numberDefaults();
	numberFormatting();
	emailValidation();
	localDateFormatting();
	utcDateFormatting();
});