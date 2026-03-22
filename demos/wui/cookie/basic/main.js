const init = () => {
	const output = document.body.querySelector(".my-output");
	const cookie = new WUICookie({
		//domain: location.hostname,
		//path: "./",
		//minutes: 365*24*60,
		//overssl: false
	});
	const encode = cookie.set("mycookie", "test");
	const value = cookie.get("mycookie");
	output.innerHTML = "<pre>"
		+ `Encoded value : ${encode}\n`
		+ `Readed value  : ${value}\n`
		+ "</pre>";
}

window.addEventListener("DOMContentLoaded", init);