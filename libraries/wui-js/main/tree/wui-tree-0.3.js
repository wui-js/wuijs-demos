/*
 * @file wui-tree-0.3.js
 * @class WUITree
 * @version 0.3
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUITree {

	static version = "0.3";
	static #defaults = {
		selector: ".wui-tree",
		nodes: [],
		target: null,
		onClick: null
	};
	static #icons = {
		"arrow-closed": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z'/></svg>",
		"arrow-opened": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/></svg>",
		"folder": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'><path d='M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z'/></svg>",
		"file": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'><path d='M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z'/></svg>"
	};

	#properties = {};
	#htmlElement;

	constructor(properties = {}) {
		const defaults = structuredClone(WUITree.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
	}

	get selector() {
		return this.#properties.selector;
	}

	get nodes() {
		return this.#properties.nodes;
	}

	get target() {
		return this.#properties.target;
	}

	get onClick() {
		return this.#properties.onClick;
	}

	set selector(value) {
		if (typeof (value) === "string" && value !== "") {
			this.#properties.selector = value;
		}
	}

	set nodes(value) {
		if (Array.isArray(value)) {
			this.#properties.nodes = value;
		}
	}

	set target(value) {
		if (typeof (value) === "string" || value === null) {
			this.#properties.target = value;
		}
	}

	set onClick(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onClick = value;
		}
	}

	#buildNodeIcon(node) {
		if (node.iconClass) {
			return `<div class="icon ${node.iconClass}"></div>`;
		}
		if (node.iconImage) {
			return `<img class="icon" src="${node.iconImage}" alt="">`;
		}
		if (node.iconType && WUITree.#icons[node.iconType]) {
			return `<div class="icon">${WUITree.#icons[node.iconType]}</div>`;
		}
		return "";
	}

	#buildNodes(nodes, depth = 0) {
		if (!nodes?.length) return "";
		let html = `<ul data-depth="${depth}">`;
		nodes.forEach(node => {
			const hasChildren = Array.isArray(node.nodes) && node.nodes.length > 0;
			const disabled = node.enabled === false;
			const opened = hasChildren && node.opened === true;
			html += `<li class="node${disabled ? " disabled" : ""}${opened ? " open" : ""}" data-id="${node.id}">`;
			html += `<div class="node-row">`;
			html += `<div class="arrow">${hasChildren ? WUITree.#icons[opened ? "arrow-opened" : "arrow-closed"] : ""}</div>`;
			html += this.#buildNodeIcon(node);
			html += `<span class="text">${node.text ?? ""}</span>`;
			html += `</div>`;
			if (hasChildren) {
				html += this.#buildNodes(node.nodes, depth + 1);
			}
			html += `</li>`;
		});
		html += `</ul>`;
		return html;
	}

	#expandList(ul) {
		ul.style.overflow = "hidden";
		ul.style.height = "0";
		ul.style.display = "";
		const h = ul.scrollHeight;
		ul.style.transition = "height 0.22s ease";
		requestAnimationFrame(() => {
			ul.style.height = h + "px";
			ul.addEventListener("transitionend", () => {
				ul.style.height = "";
				ul.style.overflow = "";
				ul.style.transition = "";
			}, { once: true });
		});
	}

	#collapseList(ul) {
		ul.style.overflow = "hidden";
		ul.style.height = ul.scrollHeight + "px";
		ul.style.transition = "height 0.22s ease";
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				ul.style.height = "0";
				ul.addEventListener("transitionend", () => {
					ul.style.display = "none";
					ul.style.height = "";
					ul.style.overflow = "";
					ul.style.transition = "";
				}, { once: true });
			});
		});
	}

	#attachEvents(container, nodes, globalOnClick) {
		nodes.forEach(node => {
			const li = container.querySelector(`[data-id="${node.id}"]`);
			if (!li) return;
			const row = li.querySelector(":scope > .node-row");
			const arrow = row.querySelector(":scope > .arrow");
			const childList = li.querySelector(":scope > ul");
			const hasChildren = !!childList;
			const disabled = node.enabled === false;
			row.addEventListener("click", () => {
				if (disabled) return;
				if (hasChildren) {
					const isOpen = li.classList.toggle("open");
					arrow.innerHTML = isOpen ? WUITree.#icons["arrow-opened"] : WUITree.#icons["arrow-closed"];
					if (isOpen) {
						this.#expandList(childList);
					} else {
						this.#collapseList(childList);
					}
				}
				const handler = node.onClick ?? globalOnClick;
				if (typeof (handler) === "function") {
					handler(node.id, !hasChildren, hasChildren ? li.classList.contains("open") : false);
				}
			});
			if (hasChildren) {
				if (!node.opened) childList.style.display = "none";
				this.#attachEvents(li, node.nodes, globalOnClick);
			}
		});
	}

	#findPath(nodes, targetId, path = []) {
		for (const node of nodes) {
			const current = [...path, node.id];
			if (node.id === targetId) return current;
			if (Array.isArray(node.nodes) && node.nodes.length) {
				const found = this.#findPath(node.nodes, targetId, current);
				if (found) return found;
			}
		}
		return null;
	}

	#openPath(container, nodes, pathIds) {
		if (!pathIds?.length) return;
		const [current, ...rest] = pathIds;
		const node = nodes.find(n => n.id === current);
		if (!node) return;
		const li = container.querySelector(`:scope > ul > li[data-id="${current}"]`);
		if (!li) return;
		const childList = li.querySelector(":scope > ul");
		if (childList && rest.length) {
			li.classList.add("open");
			li.querySelector(":scope > .node-row > .arrow").innerHTML = WUITree.#icons["arrow-opened"];
			childList.style.display = "";
			this.#openPath(li, node.nodes, rest);
		}
	}

	init() {
		if (this.nodes.length > 0) {
			this.print();
		}
	}

	print() {
		const container = document.querySelector(this.selector);
		if (!container) return;
		container.innerHTML = this.#buildNodes(this.nodes);
		this.#attachEvents(container, this.nodes, this.onClick);
		this.#htmlElement = container;
		if (this.target) {
			const path = this.#findPath(this.nodes, this.target);
			if (path) this.#openPath(container, this.nodes, path);
		}
	}

	expandAll() {
		const htmlElement = this.#htmlElement;
		if (!(htmlElement instanceof HTMLElement)) return;
		htmlElement.querySelectorAll("li.node").forEach(li => {
			const childList = li.querySelector(":scope > ul");
			if (!childList) return;
			li.classList.add("open");
			li.querySelector(":scope > .node-row > .arrow").innerHTML = WUITree.#icons["arrow-opened"];
			childList.style.display = "";
			childList.style.height = "";
			childList.style.overflow = "";
		});
	}

	collapseAll() {
		const htmlElement = this.#htmlElement;
		if (!(htmlElement instanceof HTMLElement)) return;
		htmlElement.querySelectorAll("li.node").forEach(li => {
			const childList = li.querySelector(":scope > ul");
			if (!childList) return;
			li.classList.remove("open");
			li.querySelector(":scope > .node-row > .arrow").innerHTML = WUITree.#icons["arrow-closed"];
			childList.style.display = "none";
			childList.style.height = "";
			childList.style.overflow = "";
		});
	}
}

/*
HTML output:
<div class="wui-tree">
	<ul data-depth="0">
		<li class="node [open] [disabled]" data-id="{id}">
			<div class="node-row">
				<div class="arrow">{svg arrow-closed | arrow-opened | empty}</div>
				<!-- icon (one of the following, or omitted) -->
				<div class="icon {iconClass}"></div>
				<img class="icon" src="{iconImage}" alt="">
				<div class="icon">{svg folder | file}</div>
				<!-- end icon -->
				<span class="text">{text}</span>
			</div>
			<ul data-depth="1">
				<li class="node [open] [disabled]" data-id="{id}">
					<div class="node-row">
						<div class="arrow">{svg arrow-closed | arrow-opened | empty}</div>
						<span class="text">{text}</span>
					</div>
					<!-- nested ul only present when node has children -->
				</li>
			</ul>
		</li>
	</ul>
</div>
*/
