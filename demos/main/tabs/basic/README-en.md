# WUITabs - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUITabs's basic functionality.

## WUI/JS Stack

- WUIIcon - 0.14
- WUITabs - 0.7

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-icon): `WUIIcon` component documentation.
- [WUITabs](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-tabs): `WUITabs` component documentation.

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

nav {
	position: absolute;
	top: 20px;
	left: 20px;
	right: 20px;
	bottom: 20px;
}

.my-tabs {
	height: 100%;
}

.my-tabs .page {
	padding-top: 40px;
	justify-content: center;
}

.my-tabs .page1 {
	height: 150%;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.7.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.7.css">
<script type="text/javascript" src="/libraries/wui-js/main/tabs/wui-tabs-0.7.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-tabs mobile my-tabs">
		<div class="bar">
			<div class="tab">
				<div class="icon wui-icon home-line"></div>
				<div class="text">Home</div>
			</div>
			<div class="tab">
				<div class="icon wui-icon user-line"></div>
				<div class="text">Profile</div>
			</div>
			<div class="tab">
				<div class="icon wui-icon gear-line"></div>
				<div class="text">Settings</div>
			</div>
		</div>
		<div class="body scroll">
			<div class="page page1">Page 1 content</div>
			<div class="page">Page 2 content</div>
			<div class="page">Page 3 content</div>
		</div>
	</div>
</nav>
```

JS code:

```js
const init = () => {
	const tabs = new WUITabs({
		selector: ".wui-tabs.my-tabs",
		//layout: "top",
		//index: 0
	});
	tabs.init();
}

window.addEventListener("DOMContentLoaded", init);
```
