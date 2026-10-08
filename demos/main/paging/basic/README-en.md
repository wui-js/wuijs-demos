# WUIPaging - Basic demo

## Preview

<iframe src="index.html" width="100%" height="400" scrolling="no"></iframe>

## Description

This demo shows the use of WUIPaging's basic functionality.

## WUI/JS Stack

- WUIPaging - 0.12

## Documentation

- [WUI/JS Main Lib](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md): Global documentation.
- [WUIPaging](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-paging): `WUIPaging` component documentation.

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

.my-paging {
	position: absolute;
}

.my-paging > .page > nav {
	position: absolute;
	top: 50%;
	left: 50%;
	display: flex;
	gap: 10px;
	transform: translate(-50%, -50%);
}

.my-paging > .page > nav > button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}

.output {
	position: absolute;
	left: 0;
	bottom: 0;
	margin: 10px;
	font-family: monospace;
}
```

HTML header:

```html
<link rel="stylesheet" type="text/css" href="/libraries/wui-js/main/paging/wui-paging-0.12.root.css">
<link rel="stylesheet" type="text/css" href="/libraries/wui-js/main/paging/wui-paging-0.12.css">
<script type="text/javascript" src="/libraries/wui-js/main/paging/wui-paging-0.12.js"></script>
```

HTML code:

```html
<div class="wui-paging my-paging">
	<div class="page scroll" data-target="page1">
		<h1>Page 1</h1>
		<nav>
			<button class="go-page2">go to page 2 &#9205;</button>
		</nav>
	</div>
	<div class="page scroll" data-target="page2">
		<h1>Page 2</h1>
		<nav>
			<button class="go-page1">&#9204; go to page 1</button>
			<button class="back">&#8630; back</button>
			<button class="go-page3">go to page 3 &#9205;</button>
		</nav>
	</div>
	<div class="page scroll" data-target="page3">
		<h1>Page 3</h1>
		<nav>
			<button class="go-page2">&#9204; go to page 2</button>
			<button class="back">&#8630; back</button>
		</nav>
	</div>
</div>

<div class="output"></div>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const paging = new WUIPaging({
		selector: ".wui-paging.my-paging",
		//index: null,
		//dataTarget: "target",
		onSelect: (inputIndex, inputTarget, outputIndex, outputTarget) => {
			output.textContent = `Selecting page: ${inputTarget} (${inputIndex})`;
		},
		onChange: (index, target) => {
			output.textContent = `Change completed to: ${target} (${index})`;
		},
		onBack: (index, target) => {
			output.textContent = `Back to: ${target} (${index})`;
		},
		onScrolling: (scroll) => {
			output.textContent = `Scrolling at: ${scroll}px`;
		}
	});
	paging.init();
	["page1", "page2", "page3"].forEach(target => {
		document.querySelectorAll(".go-" + target).forEach(button => {
			button.addEventListener("click", () => {
				paging.select(target);
			});
		})
	});
	document.querySelectorAll("button.back").forEach(button => {
		button.addEventListener("click", () => {
			paging.back();
		});
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!NOTE]
> Pages can have the `scroll` class to enable vertical scrolling. The component supports two transition modes: lateral movement (default) or opacity-based (by adding the `opacity` class to the main container).
