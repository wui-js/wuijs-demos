# WUIIntensity - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUIIntensity's basic functionality.

## WUI/JS Stack

- WUIIntensity - 0.8

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIIntensity](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/intensity/wui-intensity-en.md): `WUIIntensity` component documentation.

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

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-intensity {}

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/intensity/wui-intensity-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/intensity/wui-intensity-0.8.css">
<script type="text/javascript" src="/libraries/wui-js/main/intensity/wui-intensity-0.8.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-intensity my-intensity">
		<input type="range" name="myIntensity" value="0" min="0" max="3" step="1">
	</div>
	<div class="output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const intensity = new WUIIntensity({
		selector: ".wui-intensity.my-intensity",
		value: 1,
		//enabled: true,
		onChange: (event, value) => {
			output.textContent = `Change - value: ${value}`;
		}
	});
	intensity.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.
