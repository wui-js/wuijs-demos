# WUIScrolly - Demo básico

## Previsualización

<iframe src="index.html" width="100%" height="400"></iframe>

## Descripción

Esta demostración muestra el uso de las funciones básicas de WUIScrolly.

## Stack WUI/JS

- WUIScrolly - 0.8

## Documentación

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md): Documentación general.
- [WUIScrolly](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-scrolly): Documentación del componente `WUIScrolly`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |

## Implementación

Código CSS:

```css
html,
body {
	height: 100%; /* necessary */
}

body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
	font-size: 14px;
}

.wui-scrolly {
	overflow-x: hidden;
	margin: 0;
	padding: 0;
}

.wui-scrolly > .section {
	width: 100%;
	background-color: lightgray;
}

.wui-scrolly > .section > .scene > .animation {
	position: relative;
}

.wui-scrolly > .section1 {
	background-color: #f1f1f1;
}

.wui-scrolly > .section2 > .scene.scene2 {
	display: flex;
	position: relative; /* necessary */
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 20px;
}

.wui-scrolly > .section2 {
	background-color: #e9e9e9;
}

.wui-scrolly > .section3 {
	background-color: #e1e1e1;
}

.wui-scrolly > .section3 > .scene > .animation > .my-element {
	left: -100px;
}

.my-element {
	display: flex;
	position: relative; /* necessary */
	width: 50px;
	height: 50px;
	margin: 5px;
	margin: 20px;
	background-color: dodgerblue;
	align-items: center;
	justify-content: center;
	color: #fff;
}

.output {
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.css">
<script type="text/javascript" src="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.js"></script>
```

Código HTML:

```html
<body class="wui-scrolly">

	<!-- Portada -->

	<section class="section section1">
		<div class="scene">desplázate hacia abajo</div>
	</section>

	<!-- Animación CSS -->

	<section class="section section2">
		<div class="scene scene2">
			<div class="my-element wui-scrolly-load fadein" data-delay=".0">1</div>
			<div class="my-element wui-scrolly-load fadein-left" data-delay=".2">2</div>
			<div class="my-element wui-scrolly-load fadein-top" data-delay=".4">3</div>
			<div class="my-element wui-scrolly-load fadein-right" data-delay=".8">4</div>
		</div>
	</section>

	<!-- Animación JS -->

	<section class="section section3">
		<div class="scene">
			<div class="animation">
				<div class="my-element element5">5</div>
				<div class="my-element element6">6</div>
				<div class="my-element element7">7</div>
			</div>
			<div class="output"></div>
		</div>
		<div class="paging dots"></div>
	</section>
</body>
```

Código JS:

```js
const init = () => {
	const element5 = document.body.querySelector(".section3 .my-element.element5");
	const element6 = document.body.querySelector(".section3 .my-element.element6");
	const element7 = document.body.querySelector(".section3 .my-element.element7");
	const output = document.body.querySelector(".section3 .output");
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
				const left = step !== null ? parseInt(200 * progress - 100) + "px" : "100px";
				const text = `paso: ${step}, progreso: ${progress}, dirección: ${direction}`;
				scrolly.selectPage(2, step);
				if (step === 0) {
					if (direction === "up") {
						element6.style.left = "-100px";
					}
					element5.style.left = left;
				} else if (step === 1) {
					if (direction === "down") {
						element5.style.left = "100px";
					} else if (direction === "up") {
						element7.style.left = "-100px";
					}
					element6.style.left = left;
				} else if (step === 2) {
					if (direction === "down") {
						element6.style.left = "100px";
					}
					element7.style.left = left;
				} else if (step === null) {
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
			if (index === 1) {
				element5.style.left = "-100px";
			}
		},
		//onStop: null,
		debug: true
	});
	scrolly.init();
}

window.addEventListener("DOMContentLoaded", init);
```
