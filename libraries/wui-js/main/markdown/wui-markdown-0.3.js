/*
 * @file wui-markdown-0.3.js
 * @class WUIMarkdown
 * @version 0.3
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIMarkdown {

	static version = "0.3";
	static #defaults = {
		content: "",
		lang: "es",
		strict: true,
		ignoreTitles: [],
		includeOrderInTitles: true,
		includeOrderInMainTitle: false,
		targetPrefix: "wui-markdown-title",
		preClass: "wui-codebox",
		forceAbsolutePaths: false,
		githubUserContent: false,
		linkRules: []
	};
	static #icons = {
		"blockquote-note": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/><path d='m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'/></svg>",
		"blockquote-tip": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'><path d='M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z'/></svg>",
		"blockquote-important": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'><path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'/></svg>",
		"blockquote-warning": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'><path d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z'/><path d='M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z'/></svg>",
		"blockquote-caution": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'><path d='M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z'/><path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z'/></svg>"
	};
	static #iframeListening = false;
	static #colorScheme = null;

	#properties = {};

	constructor(properties = {}) {
		const defaults = structuredClone(WUIMarkdown.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
	}

	get content() {
		return this.#properties.content;
	}

	get lang() {
		return this.#properties.lang;
	}

	get strict() {
		return this.#properties.strict;
	}

	get ignoreTitles() {
		return this.#properties.ignoreTitles;
	}

	get includeOrderInTitles() {
		return this.#properties.includeOrderInTitles;
	}

	get includeOrderInMainTitle() {
		return this.#properties.includeOrderInMainTitle;
	}

	get targetPrefix() {
		return this.#properties.targetPrefix;
	}

	get preClass() {
		return this.#properties.preClass;
	}

	get forceAbsolutePaths() {
		return this.#properties.forceAbsolutePaths;
	}

	get githubUserContent() {
		return this.#properties.githubUserContent;
	}

	get linkRules() {
		return this.#properties.linkRules;
	}

	set content(value) {
		if (typeof (value) === "string") {
			this.#properties.content = value;
		}
	}

	set lang(value) {
		if (typeof (value) === "string" && value.match(/^[a-z]{2}$/i)) {
			this.#properties.lang = value.toLowerCase();
		}
	}

	set strict(value) {
		if (typeof (value) === "boolean") {
			this.#properties.strict = value;
		}
	}

	set ignoreTitles(value) {
		if (Array.isArray(value)) {
			this.#properties.ignoreTitles = value;
		}
	}

	set includeOrderInTitles(value) {
		if (typeof (value) === "boolean") {
			this.#properties.includeOrderInTitles = value;
		}
	}

	set includeOrderInMainTitle(value) {
		if (typeof (value) === "boolean") {
			this.#properties.includeOrderInMainTitle = value;
		}
	}

	set targetPrefix(value) {
		if (typeof (value) === "string") {
			this.#properties.targetPrefix = value;
		}
	}

	set preClass(value) {
		if (typeof (value) === "string") {
			this.#properties.preClass = value;
		}
	}

	set forceAbsolutePaths(value) {
		if (typeof (value) === "boolean") {
			this.#properties.forceAbsolutePaths = value;
		}
	}

	set githubUserContent(value) {
		if (typeof (value) === "boolean") {
			this.#properties.githubUserContent = value;
		}
	}

	set linkRules(value) {
		if (Array.isArray(value)) {
			this.#properties.linkRules = value;
		}
	}

	static #paintIframe(iframe) {
		const color = getComputedStyle(iframe).color;
		try {
			const body = iframe.contentDocument?.body;
			if (body) {
				body.style.color = color;
			}
		} catch {
			// cross-origin iframe: not accessible
		}
	}

	static #paintIframes() {
		document.querySelectorAll(".wui-markdown iframe").forEach(iframe => WUIMarkdown.#paintIframe(iframe));
	}

	static #iframeListener() {
		if (WUIMarkdown.#iframeListening) return;
		WUIMarkdown.#iframeListening = true;
		document.addEventListener("load", event => {
			const target = event.target;
			if (target instanceof HTMLIFrameElement && target.closest(".wui-markdown")) {
				WUIMarkdown.#paintIframe(target);
			}
		}, true);
		const observer = new MutationObserver(() => {
			const colorScheme = getComputedStyle(document.documentElement).getPropertyValue("color-scheme").trim();
			if (WUIMarkdown.#colorScheme !== colorScheme) {
				WUIMarkdown.#colorScheme = colorScheme;
				WUIMarkdown.#paintIframes();
			}
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["style", "class"],
			subtree: false
		});
		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => WUIMarkdown.#paintIframes());
	}

	init() {
		const mainElement = document.body ?? document.documentElement;
		const style = getComputedStyle(mainElement);
		Object.entries(WUIMarkdown.#icons).forEach(([name, svg]) => {
			const prop = `--wui-markdown-${name}icon-src`;
			const current = style.getPropertyValue(prop).trim();
			if (!current || current === "none" || current.match(/^url\(\s*\)$/)) {
				mainElement.style.setProperty(prop, `url("data:image/svg+xml,${encodeURIComponent(svg)}")`);
			}
		});
		WUIMarkdown.#iframeListener();
		WUIMarkdown.#paintIframes();
	}

	parse(options = {}) {
		const content = "content" in options ? options.content : this.content;
		const lang = "lang" in options ? options.lang : this.lang;
		const strict = "strict" in options ? options.strict : this.strict;
		const ignoreTitles = "ignoreTitles" in options ? options.ignoreTitles : this.ignoreTitles;
		const includeOrderInTitles = "includeOrderInTitles" in options ? options.includeOrderInTitles : this.includeOrderInTitles;
		const includeOrderInMainTitle = "includeOrderInMainTitle" in options ? options.includeOrderInMainTitle : this.includeOrderInMainTitle;
		const targetPrefix = "targetPrefix" in options ? options.targetPrefix : this.targetPrefix;
		const forceAbsolutePaths = "forceAbsolutePaths" in options ? options.forceAbsolutePaths : this.forceAbsolutePaths;
		const githubUserContent = "githubUserContent" in options ? options.githubUserContent : this.githubUserContent;
		const linkRules = Array.isArray(options.linkRules) ? options.linkRules : (Array.isArray(this.linkRules) ? this.linkRules : []);
		const source = options.source ?? null;
		const lines = content.split("\n");
		const index = [];
		const indexStack = [];
		const order = [];
		const html = [];
		let inTable = false;
		let inBlockquote = false;
		let inBlockquoteCode = false;
		let inCode = false;
		let tableColumnAligns = [];
		let blockquoteClass = "";
		let blockquoteSegments = [];
		let blockquoteCodeLang = "";
		let blockquoteCodeLines = [];
		let paragraphLines = [];
		let listEntries = [];
		let listGap = false;
		let inListCode = false;
		let listCodeLang = "";
		let listCodeLines = [];
		let ignoreFromLevel = null;
		const stripOrderPrefix = (text) => text.replace(/^(?:(?:[\da-zA-Z]+\.)+[\da-zA-Z]*[.)]?\s*|[\da-zA-Z]+[.)]\s*)/, "").trim();
		const inlineFormat = (text) => {
			const resolveUrl = (url) => {
				if (url.startsWith("?")) {
					return window.location.origin + window.location.pathname + url;
				}
				if (forceAbsolutePaths && source && !url.match(/^([a-z][a-z\d+\-.]*:|\/|#)/i)) {
					try { url = new URL(url, source).href; } catch { /* keep as-is */ }
				}
				if (githubUserContent) {
					url = url.replace(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.*)$/, "https://raw.githubusercontent.com/$1/$2/$3/$4");
				}
				return url;
			};
			const tokens = [];
			const protect = (str) => { tokens.push(str); return `\x00T${tokens.length - 1}\x00`; };
			text = text.replace(/`([^`]+)`/g, (_, c) => protect(`<code>${c.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code>`));
			text = text.replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, (_, url, label) => `[${label}](${url})`);
			text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => protect(`<img src="${resolveUrl(url)}" alt="${alt}">`));
			text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
				const href = resolveUrl(url);
				const rule = linkRules.find(r => { try { return new RegExp(r.regexp).test(href); } catch { return false; } });
				const finalHref = rule?.href ? rule.href : href;
				const target = rule?.target ? ` target="${rule.target}"` : "";
				const onclick = rule?.onclick ? ` onclick="${rule.onclick}"` : "";
				const dataHref = rule?.href ? ` data-href="${href}"` : "";
				return protect(`<a href="${finalHref}"${target}${onclick}${dataHref}>${label}</a>`);
			});
			text = text.replace(/\*\*([^\*]+)\*\*/g, "<strong>$1</strong>");
			text = text.replace(/\*([^\*]+)\*/g, "<em>$1</em>");
			text = text.replace(/__([^_]+)__/g, "<strong>$1</strong>");
			text = text.replace(/_([^_]+)_/g, "<em>$1</em>");
			text = text.replace(/\x00T(\d+)\x00/g, (_, i) => tokens[+i]);
			text = text.replace(/(<img\s[^>]*src=")([^"]+)(")/g, (_, pre, url, post) => `${pre}${resolveUrl(url)}${post}`);
			text = text.replace(/(<iframe\b[^>]*\ssrc=")([^"]+)(")/g, (_, pre, url, post) => `${pre}${resolveUrl(url)}${post}`);
			return text;
		};
		const splitCells = (str) => {
			const PIPE = "\x00PIPE\x00";
			return str.replace(/\\\|/g, PIPE).replace(/(^\|\s*|\s*\|$)/g, "").split(/\s*\|\s*/).map(c => c.replace(new RegExp(PIPE, "g"), "|"));
		};
		const flushTable = () => {
			if (!inTable) return;
			html.push(`\t\t</tbody>\n\t</table>\n</div>`);
			inTable = false;
		};
		const flushBlockquote = () => {
			const classAttr = blockquoteClass ? ` class="${blockquoteClass} ${lang}"` : "";
			html.push(`<blockquote${classAttr}>`);
			if (blockquoteClass) html.push(`\t<i class="icon"></i>`);
			blockquoteSegments.forEach(seg => {
				if (seg.type === "pre") {
					const classAttr = this.preClass || seg.lang ? ` class="${(this.preClass + " " + (seg.lang ?? "")).trim()}"` : "";
					html.push(`\t<pre${classAttr}>`);
					seg.lines.forEach(l => html.push(l));
					html.push(`\t</pre>`);
				} else {
					html.push(`\t<p>${seg.text}</p>`);
				}
			});
			html.push(`</blockquote>`);
			inBlockquote = false;
			inBlockquoteCode = false;
			blockquoteClass = "";
			blockquoteSegments = [];
			blockquoteCodeLines = [];
		};
		const flushParagraph = () => {
			if (paragraphLines.length === 0) return;
			html.push(`<p>`);
			paragraphLines.forEach((l, i) => {
				const isLast = i === paragraphLines.length - 1;
				const hardBreak = !isLast && /  $/.test(l);
				html.push(`\t${l.replace(/  $/, "")}${hardBreak ? "<br>" : ""}`);
			});
			html.push(`</p>`);
			paragraphLines = [];
		};
		const renderItems = (entries, startIdx, baseIndent, depth) => {
			const result = [];
			const pad = "\t".repeat(depth);
			const firstItem = entries.slice(startIdx).find(e => e.kind === "item");
			const type = firstItem?.marker.match(/^\d+\./) ? "ol" : "ul";
			result.push(`${pad}<${type}>`);
			let i = startIdx;
			while (i < entries.length) {
				const entry = entries[i];
				if (entry.kind !== "item") { i++; continue; }
				if (entry.indent < baseIndent) break;
				if (entry.indent > baseIndent) { i++; continue; }
				const liContent = inlineFormat(entry.content.replace(/\n/g, " "));
				i++;
				const inner = [];
				while (i < entries.length) {
					const next = entries[i];
					if (next.kind === "code") {
						const classAttr = this.preClass || next.lang ? ` class="${(this.preClass + " " + (next.lang ?? "")).trim()}"` : "";
						inner.push(`${pad}\t\t<pre${classAttr}>`);
						next.lines.forEach(l => inner.push(l));
						inner.push(`${pad}\t\t</pre>`);
						i++;
					} else if (next.kind === "item" && next.indent > baseIndent) {
						const [children, newI] = renderItems(entries, i, next.indent, depth + 1);
						inner.push(...children);
						i = newI;
					} else {
						break;
					}
				}
				if (inner.length > 0) {
					result.push(`${pad}\t<li>${liContent}`);
					result.push(...inner);
					result.push(`${pad}\t</li>`);
				} else {
					result.push(`${pad}\t<li>${liContent}</li>`);
				}
			}
			result.push(`${pad}</${type}>`);
			return [result, i];
		};
		const flushList = () => {
			if (listEntries.length === 0) return;
			const [rendered] = renderItems(listEntries, 0, 0, 0);
			rendered.forEach(l => html.push(l));
			listEntries = [];
			listGap = false;
			inListCode = false;
			listCodeLines = [];
		};
		lines.forEach(line => {
			const lineTrim = line.trim();
			let isBlock = false;
			if (lineTrim.includes("```") && !inBlockquote) {
				if (inListCode) {
					listEntries.push({ kind: "code", lang: listCodeLang, lines: listCodeLines });
					inListCode = false;
					listCodeLines = [];
					return;
				}
				if (listEntries.length > 0 || listGap) {
					const [, type] = lineTrim.match(/```(\w*)/);
					inListCode = true;
					listCodeLang = type ?? "";
					listCodeLines = [];
					listGap = false;
					return;
				}
				const [, type] = lineTrim.match(/```(\w*)/);
				const classAttr = this.preClass || type ? ` class="${(this.preClass + " " + (type ?? "")).trim()}"` : "";
				inCode = !inCode;
				line = inCode ? `<pre${classAttr}>` : "</pre>";
				isBlock = true;
			} else if (inListCode) {
				const codeLine = listCodeLang.match(/(html|htm|xml)/)
					? line.replace(/</g, "&lt;").replace(/>/g, "&gt;")
					: line;
				listCodeLines.push(codeLine);
				return;
			}
			if (!inCode && lineTrim.match(/^#+\s+.*/)) {
				const [, hashes, title] = lineTrim.match(/^(#+)\s+(.*)/);
				const rawLevel = hashes.length;
				const orderLevel = Math.min(rawLevel, order.length + 1);
				if (ignoreFromLevel !== null && rawLevel <= ignoreFromLevel) {
					ignoreFromLevel = null;
				}
				if (ignoreFromLevel === null && ignoreTitles.includes(lineTrim)) {
					ignoreFromLevel = rawLevel;
					return;
				}
				if (ignoreFromLevel !== null) return;
				order.length = orderLevel;
				order[orderLevel - 1] = (order[orderLevel - 1] ?? 0) + 1;
				const orderText = order.join(".");
				const orderDisplay = (includeOrderInTitles && !includeOrderInMainTitle) ? orderText.replace(/^\d+\.?/, "").replace(/^\./, "") : orderText;
				const titleCleaned = stripOrderPrefix(title.trim());
				const titleDisplay = includeOrderInTitles ? (orderDisplay ? `${orderDisplay}. ${titleCleaned}` : titleCleaned) : titleCleaned;
				const target = `${targetPrefix !== "" ? `${targetPrefix}-` : ""}${orderText}`.replace(/\./g, "-");
				const node = { id: target, text: titleDisplay, nodes: [] };
				indexStack.length = orderLevel;
				indexStack[orderLevel - 1] = node;
				const parentNodes = orderLevel === 1 ? index : (indexStack[orderLevel - 2]?.nodes ?? index);
				parentNodes.push(node);
				flushParagraph();
				flushList();
				flushTable();
				line = `<a name="${target}"></a>\n<h${orderLevel} data-target="${target}">${titleDisplay}</h${orderLevel}>`;
				isBlock = true;
			} else if (ignoreFromLevel !== null) {
				return;
			}
			if (!inCode) {
				if (lineTrim === "") {
					if (listEntries.length > 0) { listGap = true; return; }
					flushParagraph();
					flushTable();
					if (inBlockquote) flushBlockquote();
					return;
				}
				if (line.match(/^(\s*)([-*]|\d+\.)\s+/)) {
					if (listEntries.length === 0) {
						flushParagraph();
						flushTable();
						if (inBlockquote) flushBlockquote();
					}
					const [, spaces, marker, content] = line.match(/^(\s*)([-*]|\d+\.)\s+(.*)/);
					listEntries.push({ kind: "item", indent: spaces.length, marker, content });
					listGap = false;
					return;
				}
				if (listEntries.length > 0 && !listGap && line.match(/^(\t| {4})/)) {
					const last = listEntries[listEntries.length - 1];
					if (last.kind === "item") { last.content += "\n" + lineTrim; return; }
				}
				if (listGap) { flushList(); listGap = false; }
				if (listEntries.length > 0) flushList();
				if (lineTrim.startsWith("> ")) {
					const lineContent = lineTrim.slice(2);
					if (!inBlockquote) {
						flushParagraph();
						flushTable();
						const typeMatch = lineContent.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]$/i);
						blockquoteClass = typeMatch ? typeMatch[1].toLowerCase() : "";
						if (!typeMatch) blockquoteSegments.push({ type: "p", text: inlineFormat(lineContent) });
						inBlockquote = true;
					} else if (inBlockquoteCode) {
						if (lineContent.includes("```")) {
							blockquoteSegments.push({ type: "pre", lang: blockquoteCodeLang, lines: blockquoteCodeLines });
							inBlockquoteCode = false;
							blockquoteCodeLines = [];
						} else {
							const codeLine = blockquoteCodeLang.match(/(html|htm|xml)/)
								? lineContent.replace(/</g, "&lt;").replace(/>/g, "&gt;")
								: lineContent;
							blockquoteCodeLines.push(codeLine);
						}
					} else if (lineContent.includes("```")) {
						const [, type] = lineContent.match(/```(\w*)/);
						inBlockquoteCode = true;
						blockquoteCodeLang = type ?? "";
						blockquoteCodeLines = [];
					} else {
						blockquoteSegments.push({ type: "p", text: inlineFormat(lineContent) });
					}
					return;
				}
				if (inBlockquote) {
					flushParagraph();
					flushTable();
					flushBlockquote();
				}
				if (lineTrim.match(/^(-{3,}|\*{3,}|_{3,})$/)) {
					flushParagraph();
					flushList();
					flushTable();
					line = "<hr>";
					isBlock = true;
				} else if (!inTable && lineTrim.match(/^\|.*\|.*$/)) {
					flushParagraph();
					const headerCells = splitCells(lineTrim);
					const emptyHeader = !strict && headerCells.every(c => c.trim() === "");
					line = emptyHeader
						? "<div class=\"table-wrapper\">\n\t<table>\n\t\t<tbody>"
						: "<div class=\"table-wrapper\">\n\t<table>\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>" + headerCells.join("</th>\n\t\t\t\t<th>") + "</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>";
					inTable = true;
					isBlock = true;
				} else if (inTable && lineTrim.match(/^\|[\s|:\-]+\|$/)) {
					tableColumnAligns = splitCells(lineTrim).map(cell => {
						const left = cell.startsWith(":");
						const right = cell.endsWith(":");
						if (left && right) return "center";
						if (right) return "right";
						if (left) return "left";
						return "";
					});
					return;
				} else if (inTable && lineTrim.match(/^\|.*\|.*$/)) {
					const cells = splitCells(lineTrim);
					const tds = cells.map((cell, i) => {
						const align = tableColumnAligns[i];
						const style = align ? ` style="text-align:${align}"` : "";
						return `<td${style}>${cell}`;
					}).join("</td>\n\t\t\t\t");
					line = `\t\t\t<tr>\n\t\t\t\t${tds}</td>\n\t\t\t</tr>`;
					isBlock = true;
				} else if (inTable) {
					flushTable();
				}
				line = inlineFormat(line);
			} else if (!isBlock && inCode) {
				line = line.replace(/</g, "&lt;").replace(/>/g, "&gt;");
			}
			const isInlineBlock = !inCode && !isBlock && /^(<a\s+name="[^"]*"\s*><\/a>|<br\s*\/?>)$/.test(line.trim());
			if (isBlock || isInlineBlock) {
				flushParagraph();
				html.push(line);
			} else if (inCode) {
				html.push(line);
			} else {
				paragraphLines.push(line);
			}
		});
		flushParagraph();
		flushList();
		flushTable();
		if (inBlockquote) flushBlockquote();
		return { index, htmlContent: html.join("\n") };
	}
}
