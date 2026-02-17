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
	output.textContent = `input value: ${inputValue} - output value: ${outputValue}`;
}

// Email validation

const emailValidation = () => {
	const email = "test@example.com";
	const output = document.body.querySelector(".my-output.email");
	const validation = email.wuiValidateEmail();
	output.textContent = `email: ${email} - validation: ${validation}`;
}

// Local date/time formatting

const localDateFormatting = () => {
	const inputValue = "2023-12-31";
	const inputFormat = "yyyy-mm-dd";
	const date = new Date().wuiLoad(inputValue, inputFormat);
	const output = document.body.querySelector(".my-output.localDate");
	const format = "dd/mm/yyyy hh:MM [GMT]zz";
	const outputValue = date.wuiToString(format, { utc: false });
	output.textContent = `input value: ${inputValue} - local date: ${date} - output format: ${format} - output value: ${outputValue}`;
}

const utcDateFormatting = () => {
	const inputValue = "2023-12-31";
	const inputFormat = "yyyy-mm-dd";
	const date = new Date().wuiLoad(inputValue, inputFormat);
	const output = document.body.querySelector(".my-output.utcDate");
	const format = "dd/mm/yyyy hh:MM [GMT]zz";
	const outputValue = date.wuiToString(format, { utc: true });
	output.textContent = `input value: ${inputValue} - utc date: ${date} - output format: ${format} - output value: ${outputValue}`;
}

// Init

window.addEventListener("DOMContentLoaded", () => {
	numberDefaults();
	numberFormatting();
	emailValidation();
	localDateFormatting();
	utcDateFormatting();
});