# WUICodebox - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUICodebox's basic functionality.

## WUI/JS Stack

- WUICodebox - 0.3

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUICodebox](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/codebox/wui-codebox-en.md): `WUICodebox` component documentation.

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
	flex-direction: column;
	gap: 10px;
}

.my-codebox {}

.output {
	font-family: monospace;
}
```

HTML header:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/codebox/wui-codebox-0.3.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/codebox/wui-codebox-0.3.styles.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/codebox/wui-codebox-0.3.css">
<script type="text/javascript" src="/libraries/wui-js/main/codebox/wui-codebox-0.3.js"></script>
```

HTML code:

```html
<nav>
	<pre class="wui-codebox js my-codebox">
const sum = (a, b) => {
	return a + b;
};
</pre>
</nav>
```

JS code:

```js
const init = () => {
	const codebox = new WUICodebox({
		selector: ".wui-codebox.my-codebox",
		//type: "txt",
		style: "github",
		//lineNumbering: true,
		//copyButton: true,
		//copyButtonPosition: "top-right"
	});
	codebox.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> The `github`, `vscode` and `xcode` styles are defined in `wui-codebox-0.3.styles.css`, which must be loaded together with `wui-codebox-0.3.css`. The `wui.js` loader loads it automatically.
