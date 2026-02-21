const init = () => {
	const element5 = document.body.querySelector(".section3 .my-element.element5");
	const element6 = document.body.querySelector(".section3 .my-element.element6");
	const element7 = document.body.querySelector(".section3 .my-element.element7");
	const output = document.body.querySelector(".section3 .my-output");
	const scrolly = new WUIScrolly({
		sections: [{
			selector: ".section1",
			target: "cover",
			type: "static",
			height: "100%"
		}, {
			selector: ".section2",
			target: "css-animation",
			type: "static",
			height: 400
		}, {
			selector: ".section3",
			target: "js-animation",
			type: "auto",
			height: 4500,
			steps: 3,
			pages: 3,
			animation: (step, progress) => {
				const direction = scrolly.direction;
				const left = step != null ? parseInt(200 * progress - 100) + "px" : "100px";
				const text = `step: ${step}, progress: ${progress}, direction: ${direction}`;
				scrolly.selectPage(2, step);
				if (step == 0) {
					if (direction == "up") {
						element6.style.left = "-100px";
					}
					element5.style.left = left;
				} else if (step == 1) {
					if (direction == "down") {
						element5.style.left = "100px";
					} else if (direction == "up") {
						element7.style.left = "-100px";
					}
					element6.style.left = left;
				} else if (step == 2) {
					if (direction == "down") {
						element6.style.left = "100px";
					}
					element7.style.left = left;
				} else if (step == null) {
					element7.style.left = left;
				}
				output.textContent = text;
			}
		}],
		//behavior: "smooth",
		//dataScrollY: "scrollY",
		//dataDelay: "delay",
		//onStart: null,
		onMove: (index, step, progress) => {
			if (index == 1) {
				element5.style.left = "-100px";
			}
		},
		//onStop: null,
		debug: true
	});
	scrolly.init();
}

window.addEventListener("DOMContentLoaded", init);