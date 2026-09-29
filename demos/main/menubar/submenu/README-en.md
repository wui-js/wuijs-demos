# WUIMenubar - Submenu demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUIMenubar's submenu functionality.

## WUI/JS Stack

- WUIIcon - 0.13
- WUIMenubar - 0.10

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-icon): `WUIIcon` component documentation.
- [WUIMenubar](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-menubar): `WUIMenubar` component documentation.

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

.output {
	position: absolute;
	top: 10px;
	left: 10px;
	right: 10px;
	text-align: right;
	font-family: monospace;
}

@media screen and (max-width: 767px) {
	.output {
		text-align: center:
	}
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.13.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.13.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.10.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.10.css">
<script type="text/javascript" src="/libraries/wui-js/main/menubar/wui-menubar-0.10.js"></script>
```

HTML code:

```html
<div class="wui-menubar my-menubar"></div>
<div class="output"></div>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const menubar = new WUIMenubar({
		selector: ".wui-menubar.my-menubar",
		centered: false,
		separations: true,
		//compacted: false,
		//expansive: true,
		autoClose: false,
		//hiddenPassiveBorder: false,
		topButtons: [{
			id: "logo",
			iconImage: "https://wuijs.dev/Images/Logo/wuijs-isotype-color.svg",
			label: "WUI /JS Lib",
			tooltipable: false,
			selectable: false
		}],
		mainButtons: [{
			id: "zones",
			iconClass: "wui-icon home-fill",
			label: "Home",
			selected: true
		}, {
			id: "settings",
			iconClass: "wui-icon gear-fill",
			label: "Settings",
			selectable: false
		}, {
			id: "tools",
			iconClass: "wui-icon pencil-fill",
			label: "Tools",
			buttons: [{
				id: "users",
				iconClass: "wui-icon palette-fill",
				label: "Colors"
			}, {
				id: "zoomin",
				iconClass: "wui-icon zoomin-line",
				label: "Zoom in"
			}, {
				id: "zoomout",
				iconClass: "wui-icon zoomout-line",
				label: "Zoom out"
			}, {
				id: "images",
				iconClass: "wui-icon image-fill",
				label: "Images"
			}]
		}, {
			id: "account",
			iconClass: "wui-icon person-circle-fill",
			photoImage: "",
			label: "Account",
			selectable: false
		}, {
			id: "notifications",
			iconClass: "wui-icon bell-fill",
			label: "Notifications",
			radio: false
		}],
		bottomButtons: [{
			id: "logout",
			iconClass: "wui-icon logout-line",
			label: "Logout",
			selectable: false
		}],
		onClick: (id) => {
			output.textContent = `Click - id button: "${id}"`;
		},
		onSelect: (id) => {
			output.textContent = `Select - id button: "${id}"`;
		}
	});
	menubar.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.
