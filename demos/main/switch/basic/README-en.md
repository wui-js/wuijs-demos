# WUISwitch - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUISwitch's basic functionality.

## WUI/JS Stack

- WUISwitch - 0.11

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/switch/wui-switch-en.md): `WUISwitch` component documentation.

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

.my-switch {}

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/switch/wui-switch-0.11.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/switch/wui-switch-0.11.css">
<script type="text/javascript" src="/libraries/wui-js/main/switch/wui-switch-0.11.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-switch my-switch">
		<input type="checkbox" name="myCheckbox" value="1">
	</div>
	<div class="output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const switchbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1",
		activated: true,
		//enabled: true,
		onChange: (value, activated) => {
			output.textContent = `Change - value: ${value}, activated: ${activated}`;
		}
	});
	switchbox.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.
