const init = () => {
	const output = document.body.querySelector(".my-output");
	const cookie = new WUICookie({
		//domain: location.hostname,
		//path: "./",
		//minutes: 365*24*60,
		//overssl: false
	});
	cookie.set("mycookie", "test");
	output.textContent = "Value read from the cookie: " + cookie.get("mycookie");
}

window.addEventListener("DOMContentLoaded", init);