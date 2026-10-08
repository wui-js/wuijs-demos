# WUISlider - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUISlider's basic functionality.

## WUI/JS Stack

- WUISlider - 0.10

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUISlider](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-slider): `WUISlider` component documentation.

## Source

| Type | File |
|:----:| ------- |
| CSS  | [style.css](./style.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |

## Implementation

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

.my-slider {
	width: 100%;
	max-height: 400px;
}

.my-slider .slide {
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
}

.slide1 {
	background-color: #FF5C8A;
}

.slide2 {
	background-color: #8B5CF6;
}

.slide3 {
	background-color: #4DA3FF;
}

nav {
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 10px;
	gap: 10px;
}

.output {
	width: 100%;
	height: 40px;
	margin: 10px;
	font-family: monospace;
}
```

HTML Header:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/slider/wui-slider-0.10.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/slider/wui-slider-0.10.css">
<script type="text/javascript" src="/libraries/wui-js/main/slider/wui-slider-0.10.js"></script>
```

HTML Code:

```html
<div class="wui-slider my-slider">
	<div class="body">
		<div class="slide slide1">Slide 1</div>
		<div class="slide slide2">Slide 2</div>
		<div class="slide slide3">Slide 3</div>
	</div>
	<div class="paging dots"></div>
</div>
<nav>
	<button class="my-button prev">&#9204; prev</button>
	<button class="my-button next">next &#9205;</button>
</nav>
<div class="output"></div>
```

JS Code:

```js
const init = () => {
	const prevButton = document.body.querySelector("button.prev");
	const nextButton = document.body.querySelector("button.next");
	const output = document.body.querySelector(".output");
	const slider = new WUISlider({
		selector: ".wui-slider.my-slider",
		transitionDelay: 300,
		onChange: (index) => {
			output.textContent = `Change to: ${index}`;
		}
	});
	slider.init();
	prevButton.addEventListener("click", () => {
		slider.prev();
	});
	nextButton.addEventListener("click", () => {
		slider.next();
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.
