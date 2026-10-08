# WUIPluginThemes - Custom theme

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUIPluginThemes's custom predefined themes.

## WUI/JS Stack

- WUIPluginThemes - 0.12
- WUISwitch - 0.10

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-switch): `WUISwitch` component documentation.
- [WUI/JS Plugins Lib](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIPluginThemes](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/README-en.md#wui-plugin-themes): `WUIPluginThemes` component documentation.

## Source

| Type | File |
|:----:| ---- |
| CSS  | [style.css](./style.css) |
| CSS  | [wui.css](./wui.css) |
| HTML | [index.html](./index.html) |
| JS   | [main.js](./main.js) |

## Implementation

CSS WUI settings:

```css
body.wuiplugin-themes.default {
	--wuiplugin-theme-utilitycolor-hightlight-light: #e91e63;
    --wuiplugin-theme-utilitycolor-hightlight-dark: #f06292;
    --wuiplugin-theme-bgcolor-out-light: #fff8f9;
    --wuiplugin-theme-bgcolor-out-dark: #1a0a0d;
}
```

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
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/main/switch/wui-switch-0.10.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/plugins/themes/wuiplugin-themes-0.12.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/plugins/themes/default/settings-0.15.css">
<link type="text/css" rel="stylesheet" href="./wui.css">
<script type="text/javascript" src="./libraries/wui-js/main/switch/wui-switch-0.10.js"></script>
<script type="text/javascript" src="./libraries/wui-js/plugins/themes/wuiplugin-themes-0.12.js"></script>
```

HTML code:

```html
<body class="wuiplugin-themes default light">
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
	const themes = new WUIPluginThemes();
	const switchbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1",
		activated: false,
		onChange: (value, activated) => {
			themes.setScheme(activated ? "dark" : "light");
		}
	});
	switchbox.init();
}

window.addEventListener("DOMContentLoaded", init);
```
