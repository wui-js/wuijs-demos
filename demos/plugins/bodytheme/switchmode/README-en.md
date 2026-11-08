# WUIPluginBodyTheme - Switch mode

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUIPluginBodyTheme's switch light and dark mode functionality.

## WUI/JS Stack

- WUIBody - 0.11
- WUISwitch - 0.11
- WUIPluginBodyTheme - 0.16

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/switch/wui-switch-en.md): `WUISwitch` component documentation.
- [WUI/JS Plugins Lib](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIPluginBodyTheme](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/classes/bodytheme/wuiplugin-bodytheme-en.md): `WUIPluginBodyTheme` component documentation.

## Source

| Type | File |
|:----:| ---- |
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
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/main/switch/wui-switch-0.11.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/plugins/bodytheme/wuiplugin-bodytheme-0.16.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/plugins/bodytheme/default/settings-0.16.css">
<script type="text/javascript" src="./libraries/wui-js/main/body/wui-body-0.11.js"></script>
<script type="text/javascript" src="./libraries/wui-js/main/switch/wui-switch-0.11.js"></script>
<script type="text/javascript" src="./libraries/wui-js/plugins/bodytheme/wuiplugin-bodytheme-0.16.js"></script>
```

HTML code:

```html
<body class="wuiplugin-bodytheme default light">
	<nav>
		<div class="wui-switch my-switch">
			<input type="checkbox" name="mySwitch">
		</div>
	</nav>
</body>
```

JS code:

```js
const init = () => {
	const body = new WUIBody();
	const switchbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1",
		activated: false,
		onChange: (value, activated) => {
			body.theme.setScheme(activated ? "dark" : "light");
		}
	});
	switchbox.init();
}

window.addEventListener("DOMContentLoaded", init);
```
