/*
 * @file wui-codebox-0.3.js
 * @class WUICodebox
 * @version 0.3
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUICodebox {

	static version = "0.3";
	static #defaults = {
		selector: ".wui-codebox",
		type: "txt",
		style: "default",
		lineNumbering: true,
		copyButton: true,
		copyButtonPosition: "top-right"
	};
	static #types = {
		text: "txt", txt: "txt",
		json: "json",
		html: "html", htm: "html",
		xml: "xml", svg: "xml",
		css: "css", scss: "css", less: "css",
		js: "js", jsx: "js",
		ts: "ts", tsx: "ts",
		python: "python", py: "python",
		ruby: "ruby", rb: "ruby",
		php: "php",
		perl: "perl", pl: "perl", pm: "perl",
		bash: "bash", sh: "bash",
		markdown: "markdown", md: "markdown",
		java: "java",
		kotlin: "kotlin", kt: "kotlin", kts: "kotlin",
		swift: "swift"
	};
	static #icons = {
		copy: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'><path fill-rule='evenodd' d='M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z'/></svg>",
		copied: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'><path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z'/></svg>"
	};

	#properties = {};
	#htmlElements = [];

	constructor(properties = {}) {
		const defaults = structuredClone(WUICodebox.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
	}

	get selector() {
		return this.#properties.selector;
	}

	get type() {
		return this.#properties.type;
	}

	get style() {
		return this.#properties.style;
	}

	get lineNumbering() {
		return this.#properties.lineNumbering;
	}

	get copyButton() {
		return this.#properties.copyButton;
	}

	get copyButtonPosition() {
		return this.#properties.copyButtonPosition;
	}

	set selector(value) {
		if (typeof (value) === "string" && value !== "") {
			this.#properties.selector = value;
			this.#htmlElements = document.querySelectorAll(value);
		}
	}

	set type(value) {
		if (typeof (value) === "string" && value.trim().toLowerCase() in WUICodebox.#types) {
			this.#properties.type = value.trim().toLowerCase();
		}
	}

	set style(value) {
		if (typeof (value) === "string" && value.trim() !== "") {
			this.#properties.style = value.trim().toLowerCase();
		}
	}

	set lineNumbering(value) {
		if (typeof (value) === "boolean") {
			this.#properties.lineNumbering = value;
		}
	}

	set copyButton(value) {
		if (typeof (value) === "boolean") {
			this.#properties.copyButton = value;
		}
	}

	set copyButtonPosition(value) {
		if (typeof (value) === "string" && value !== "" && ["top-right", "bottom-right"].includes(value.toLowerCase())) {
			this.#properties.copyButtonPosition = value.toLowerCase();
		}
	}

	getElements() {
		return this.#htmlElements;
	}

	getButtonElements() {
		const targets = document.querySelectorAll(this.selector);
		const buttons = Array.from(targets).map(target => this.copyButtonPosition === "top-right" ? target.previousElementSibling : target.nextElementSibling).filter(prev => prev && prev.tagName === "BUTTON");
		return buttons;
	}

	#escapeHtml(text) {
		return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
	}

	#wrap(type, text) {
		return `<span class="tk-${type}">${text}</span>`;
	}

	// Tokenizes content using an ordered list of {type, re} patterns (first match wins).
	// Each re must not contain capturing groups — wrap is always applied to m[0].
	#tokenize(content, patterns) {
		const master = new RegExp(patterns.map(p => `(${p.re.source})`).join("|"), "g");
		let result = "";
		let last = 0;
		let m;
		while ((m = master.exec(content)) !== null) {
			if (m.index > last) result += this.#escapeHtml(content.slice(last, m.index));
			const gi = m.slice(1).findIndex(g => g !== undefined);
			result += this.#wrap(patterns[gi].type, this.#escapeHtml(m[0]));
			last = master.lastIndex;
		}
		if (last < content.length) result += this.#escapeHtml(content.slice(last));
		return result;
	}

	// Splits tokenized HTML by newline while properly closing and reopening spans
	// that cross line boundaries, so each line has well-formed HTML.
	#splitLines(html) {
		const lines = [];
		let current = "";
		let openSpans = [];
		let i = 0;
		while (i < html.length) {
			if (html[i] === "\n") {
				lines.push(current + openSpans.map(() => "</span>").join(""));
				current = openSpans.join("");
				i++;
			} else if (html[i] === "<") {
				if (html.startsWith("</span>", i)) {
					openSpans.pop();
					current += "</span>";
					i += 7;
				} else if (html.startsWith("<span", i)) {
					const end = html.indexOf(">", i);
					const tag = html.slice(i, end + 1);
					openSpans.push(tag);
					current += tag;
					i = end + 1;
				} else {
					current += html[i++];
				}
			} else {
				current += html[i++];
			}
		}
		lines.push(current + openSpans.map(() => "</span>").join(""));
		return lines;
	}

	#highlight(content, type) {
		const patterns = this.#getTypePatterns(type);
		if (!patterns) return this.#escapeHtml(content);
		return this.#tokenize(content, patterns);
	}

	#detectType(element) {
		for (const cls of element.classList) {
			if (cls !== "wui-codebox" && WUICodebox.#types[cls]) return WUICodebox.#types[cls];
		}
		return null;
	}

	#getTypePatterns(type) {
		const STR_DQ_SQ = /(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/;
		const STR_BACKTICK = /`(?:[^`\\]|\\.)*`/;
		const BLOCK_CMT = /\/\*[\s\S]*?\*\//;
		const LINE_CMT = /\/\/[^\n]*/;
		const HASH_CMT = /#[^\n]*/;
		const NUM = /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/;
		const BASH_KW = /\b(?:if|then|else|elif|fi|for|while|do|done|case|esac|in|function|return|local|export|readonly|declare|typeset|source|alias|echo|printf|read|exit|break|continue|shift|set|unset|true|false|test|select|until)\b/;
		const BASH_CMD = /(?<![@/.])\b(?:cd|ls|pwd|mkdir|rm|rmdir|cp|mv|touch|cat|tac|head|tail|grep|egrep|fgrep|sed|awk|find|chmod|chown|chgrp|ln|stat|file|wc|sort|uniq|cut|paste|tr|diff|xargs|tee|kill|ps|top|df|du|mount|umount|env|which|whereis|type|man|clear|history|date|uname|hostname|whoami|id|su|sudo|ssh|scp|sftp|rsync|curl|wget|ping|git|npm|yarn|pnpm|pip|pip3|python|python3|node|ruby|perl|php|gcc|make|cmake|docker|kubectl|tar|gzip|gunzip|zip|unzip|openssl|vi|vim|nano|less|more|open)\b/;
		const JS_KW = /\b(?:async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|from|function|if|import|in|instanceof|let|new|of|return|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/;
		const JS_CONST = /\b(?:true|false|null|undefined|NaN|Infinity)\b/;
		const JS_FN = /\b[\w$]+(?=\s*\()/;
		const TS_TYPE = /\b(?:string|number|boolean|any|void|never|unknown|object|symbol|bigint|readonly|keyof|infer|type|interface|enum|declare|abstract|namespace|module|satisfies|as)\b/;
		const PY_KW = /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|False|finally|for|from|global|if|import|in|is|lambda|None|nonlocal|not|or|pass|raise|return|True|try|while|with|yield)\b/;
		const CSS_KW = /\b(?:auto|inherit|initial|unset|revert|none|normal|bold|italic|flex|grid|block|inline|inline-block|absolute|relative|fixed|sticky|static|hidden|visible|scroll|transparent|solid|dashed|dotted|double|center|left|right|top|bottom|middle|baseline|start|end|stretch|cover|contain|repeat|no-repeat|space|round|important|forwards|backwards|both|ease|linear|alternate|infinite|pointer|currentColor)\b/;
		const PY_BUILTIN = /\b(?:abs|all|any|bin|bool|bytes|callable|chr|dict|dir|enumerate|eval|exec|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|min|next|object|oct|open|ord|pow|print|property|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip)\b/;
		const RB_KW = /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|defined|do|else|elsif|end|ensure|false|for|if|in|module|next|nil|not|or|redo|rescue|retry|return|self|super|then|true|undef|unless|until|when|while|yield)\b/;
		const PHP_KW = /\b(?:abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|do|echo|else|elseif|empty|extends|final|finally|fn|for|foreach|function|global|if|implements|include|include_once|instanceof|interface|isset|list|match|namespace|new|null|or|print|private|protected|public|readonly|require|require_once|return|static|switch|throw|trait|true|try|unset|use|var|while|xor|yield|false)\b/i;
		const PERL_KW = /\b(?:and|cmp|continue|do|else|elsif|eq|for|foreach|ge|gt|if|last|le|local|lt|my|ne|next|not|or|our|package|print|redo|ref|return|scalar|sub|unless|until|use|while|xor|die|warn|push|pop|shift|unshift|splice|sort|reverse|grep|map|keys|values|exists|delete|defined)\b/;
		const JAVA_KW = /\b(?:abstract|assert|break|case|catch|class|const|continue|default|do|else|enum|extends|final|finally|for|goto|if|implements|import|instanceof|interface|native|new|package|private|protected|public|record|return|sealed|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|var|volatile|while|yield)\b/;
		const JAVA_TYPE = /\b(?:boolean|byte|char|double|float|int|long|short|void|Boolean|Byte|Character|Double|Float|Integer|Long|Short|String|Object|Number|Math|System|StringBuilder|StringBuffer|Iterable|Comparable|Cloneable|Runnable|Thread|Exception|RuntimeException|Error|Throwable|Class|Enum|Record|List|ArrayList|LinkedList|Map|HashMap|LinkedHashMap|TreeMap|Set|HashSet|LinkedHashSet|TreeSet|Queue|Deque|ArrayDeque|PriorityQueue|Stack|Vector|Collections|Arrays|Optional|Stream|Collectors|Iterator|Collection|Comparator|Serializable|AutoCloseable|Closeable)\b/;
		const JAVA_CONST = /\b(?:true|false|null)\b/;
		const JAVA_NUM = /\b(?:0[xX][0-9a-fA-F]+[lL]?|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?[lLfFdD]?)\b/;
		const KT_KW = /\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|else|enum|expect|external|finally|for|fun|get|if|import|in|init|inline|inner|interface|internal|is|lateinit|noinline|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|try|typealias|val|value|var|vararg|when|where|while)\b/;
		const KT_TYPE = /\b(?:Boolean|Byte|Char|Double|Float|Int|Long|Short|String|Unit|Any|Nothing|Number|Array|List|MutableList|Map|MutableMap|Set|MutableSet|Pair|Triple|Sequence|Flow|StateFlow|SharedFlow|Channel|Job|Deferred|CoroutineScope|Lazy|Result|Iterable|Collection|MutableCollection|Iterator|Comparable|Throwable|Exception|Error|HashMap|HashSet|LinkedHashMap|ArrayList)\b/;
		const KT_CONST = /\b(?:true|false|null|it)\b/;
		const KT_NUM = /\b(?:0[xX][0-9a-fA-F_]+[lL]?|0[bB][01_]+[lL]?|\d[\d_]*(?:\.\d[\d_]*)?(?:[eE][+-]?\d+)?[lLfF]?)\b/;
		const SWIFT_KW = /\b(?:actor|any|as|associatedtype|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|let|mutating|nonisolated|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|self|set|some|static|struct|subscript|super|switch|throw|throws|try|type|typealias|unowned|var|weak|where|while|willSet)\b/;
		const SWIFT_TYPE = /\b(?:Bool|Character|Double|Float|Float16|Float80|Int|Int8|Int16|Int32|Int64|String|UInt|UInt8|UInt16|UInt32|UInt64|Void|Any|AnyObject|Never|Optional|Array|Dictionary|Set|Tuple|Result|Error|NSObject|NSString|NSArray|NSDictionary|NSData|NSURL|URL|Data|Date|UUID|Codable|Encodable|Decodable|Hashable|Equatable|Comparable|Identifiable|ObservableObject|Published|Binding|State|StateObject|EnvironmentObject|Environment|View|Text|Image|Color|Button|VStack|HStack|ZStack|List|NavigationView|NavigationStack|Sheet|Alert|Task|MainActor|Sendable|Sequence|Collection|IteratorProtocol|CustomStringConvertible|Numeric|BinaryInteger|FloatingPoint|SignedNumeric)\b/;
		const SWIFT_CONST = /\b(?:true|false|nil|self|super)\b/;
		const SWIFT_NUM = /\b(?:0[xX][0-9a-fA-F_]+(?:\.[0-9a-fA-F_]+)?(?:[pP][+-]?\d+)?|0[oO][0-7_]+|0[bB][01_]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)\b/;
		switch (type) {
			case "bash": return [
				{ type: "comment", re: HASH_CMT },
				{ type: "string", re: STR_DQ_SQ },
				{ type: "variable", re: /\$(?:\{[^}]+\}|[\w]+)/ },
				{ type: "keyword", re: BASH_KW },
				{ type: "command", re: BASH_CMD },
				{ type: "number", re: NUM },
				{ type: "operator", re: /[|&;()<>]/ }
			];
			case "json": return [
				{ type: "string", re: STR_DQ_SQ },
				{ type: "number", re: NUM },
				{ type: "constant", re: /\b(?:true|false|null)\b/ },
				{ type: "operator", re: /[{}[\]:,]/ }
			];
			case "html": return [
				{ type: "comment", re: /<!--[\s\S]*?-->/ },
				{ type: "keyword", re: /<!DOCTYPE[^>]*>/i },
				{ type: "tag", re: /<\/?[\w:.-]+/ },
				{ type: "attr", re: /[\w:-]+(?=\s*=)/ },
				{ type: "string", re: STR_DQ_SQ },
				{ type: "operator", re: /\/?>/ }
			];
			case "xml": return [
				{ type: "comment", re: /<!--[\s\S]*?-->/ },
				{ type: "comment", re: /<!\[CDATA\[[\s\S]*?\]\]>/ },
				{ type: "tag", re: /<\/?[\w:.-]+/ },
				{ type: "attr", re: /[\w:-]+(?=\s*=)/ },
				{ type: "string", re: STR_DQ_SQ },
				{ type: "operator", re: /\/?>/ }
			];
			case "css": return [
				{ type: "comment", re: BLOCK_CMT },
				{ type: "string", re: STR_DQ_SQ },
				{ type: "variable", re: /--[\w-]+/ },
				{ type: "variable", re: /\$[\w-]+/ },
				{ type: "variable", re: /@[\w-]+/ },
				{ type: "color", re: /#[0-9a-fA-F]{3,8}\b/ },
				{ type: "number", re: /\b\d+(?:\.\d+)?(?:px|em|rem|%|vh|vw|vmin|vmax|s|ms|deg|fr|ch|ex|cm|mm|in|pt|pc)?\b/ },
				{ type: "selector", re: /[.#:][a-zA-Z][\w-]*/ },
				{ type: "function", re: /[\w-]+(?=\()/ },
				{ type: "keyword", re: CSS_KW },
				{ type: "property", re: /[\w-]+(?=\s*:)/ },
				{ type: "operator", re: /[{}:;,!()/]/ }
			];
			case "js": return [
				{ type: "comment", re: BLOCK_CMT },
				{ type: "comment", re: LINE_CMT },
				{ type: "string", re: STR_BACKTICK },
				{ type: "string", re: STR_DQ_SQ },
				{ type: "constant", re: JS_CONST },
				{ type: "keyword", re: JS_KW },
				{ type: "number", re: NUM },
				{ type: "function", re: JS_FN },
				{ type: "operator", re: /[+\-*/%&|^~<>=!?:.,;(){}[\]]/ }
			];
			case "ts": return [
				{ type: "comment", re: BLOCK_CMT },
				{ type: "comment", re: LINE_CMT },
				{ type: "string", re: STR_BACKTICK },
				{ type: "string", re: STR_DQ_SQ },
				{ type: "constant", re: JS_CONST },
				{ type: "type", re: TS_TYPE },
				{ type: "keyword", re: JS_KW },
				{ type: "number", re: NUM },
				{ type: "function", re: JS_FN },
				{ type: "operator", re: /[+\-*/%&|^~<>=!?:.,;(){}[\]]/ }
			];
			case "python": return [
				{ type: "comment", re: HASH_CMT },
				{ type: "string", re: /(?:"""[\s\S]*?"""|'''[\s\S]*?''')/ },
				{ type: "string", re: STR_DQ_SQ },
				{ type: "decorator", re: /@[\w.]+/ },
				{ type: "keyword", re: PY_KW },
				{ type: "builtin", re: PY_BUILTIN },
				{ type: "number", re: NUM },
				{ type: "function", re: /\b[\w]+(?=\s*\()/ },
				{ type: "operator", re: /[+\-*/%&|^~<>=!?:.,;(){}[\]]/ }
			];
			case "ruby": return [
				{ type: "comment", re: HASH_CMT },
				{ type: "string", re: STR_DQ_SQ },
				{ type: "string", re: /:[a-zA-Z_]\w*/ },
				{ type: "keyword", re: RB_KW },
				{ type: "variable", re: /[@$][A-Za-z_]\w*/ },
				{ type: "number", re: NUM },
				{ type: "function", re: /\b[\w?!]+(?=\s*\()/ },
				{ type: "operator", re: /[+\-*/%&|^~<>=!?:.,;(){}[\]]/ }
			];
			case "php": return [
				{ type: "comment", re: BLOCK_CMT },
				{ type: "comment", re: LINE_CMT },
				{ type: "comment", re: HASH_CMT },
				{ type: "string", re: STR_DQ_SQ },
				{ type: "variable", re: /\$[\w]+/ },
				{ type: "keyword", re: PHP_KW },
				{ type: "number", re: NUM },
				{ type: "function", re: /\b[\w]+(?=\s*\()/ },
				{ type: "operator", re: /[+\-*/%&|^~<>=!?:.,;(){}[\]@]/ }
			];
			case "perl": return [
				{ type: "comment", re: HASH_CMT },
				{ type: "string", re: STR_DQ_SQ },
				{ type: "variable", re: /[$@%][\w:]+/ },
				{ type: "keyword", re: PERL_KW },
				{ type: "number", re: NUM },
				{ type: "function", re: /\b[\w]+(?=\s*\()/ },
				{ type: "operator", re: /[+\-*/%&|^~<>=!?:.,;(){}[\]]/ }
			];
			case "markdown": return [
				{ type: "string", re: /```[\s\S]*?```/ },
				{ type: "string", re: /`[^`\n]+`/ },
				{ type: "keyword", re: /#{1,6} [^\n]+/ },
				{ type: "comment", re: />[^\n]+/ },
				{ type: "tag", re: /\*\*(?:[^*\n]|\*(?!\*))+\*\*/ },
				{ type: "tag", re: /__(?:[^_\n]|_(?!_))+__/ },
				{ type: "variable", re: /\*[^*\n]+\*/ },
				{ type: "variable", re: /_[^_\n]+_/ },
				{ type: "constant", re: /!\[[^\]]*\]/ },
				{ type: "function", re: /\[[^\]\n]+\](?=\s*\()/ },
				{ type: "attr", re: /\([^)\n]+\)/ },
				{ type: "operator", re: /(?:---+|\*\*\*+|___+)(?=\n|$)/ }
			];
			case "swift": return [
				{ type: "comment", re: BLOCK_CMT },
				{ type: "comment", re: LINE_CMT },
				{ type: "string", re: /"""[\s\S]*?"""/ },
				{ type: "string", re: STR_DQ_SQ },
				{ type: "decorator", re: /@[\w]+/ },
				{ type: "constant", re: SWIFT_CONST },
				{ type: "keyword", re: SWIFT_KW },
				{ type: "type", re: SWIFT_TYPE },
				{ type: "number", re: SWIFT_NUM },
				{ type: "function", re: /\b[\w]+(?=\s*\()/ },
				{ type: "operator", re: /[+\-*/%&|^~<>=!?:.,;(){}[\]]/ }
			];
			case "kotlin": return [
				{ type: "comment", re: BLOCK_CMT },
				{ type: "comment", re: LINE_CMT },
				{ type: "string", re: /"""[\s\S]*?"""/ },
				{ type: "string", re: STR_DQ_SQ },
				{ type: "decorator", re: /@[\w.]+/ },
				{ type: "constant", re: KT_CONST },
				{ type: "keyword", re: KT_KW },
				{ type: "type", re: KT_TYPE },
				{ type: "number", re: KT_NUM },
				{ type: "function", re: /\b[\w]+(?=\s*\()/ },
				{ type: "operator", re: /[+\-*/%&|^~<>=!?:.,;(){}[\]]/ }
			];
			case "java": return [
				{ type: "comment", re: BLOCK_CMT },
				{ type: "comment", re: LINE_CMT },
				{ type: "string", re: STR_DQ_SQ },
				{ type: "decorator", re: /@[\w.]+/ },
				{ type: "constant", re: JAVA_CONST },
				{ type: "keyword", re: JAVA_KW },
				{ type: "type", re: JAVA_TYPE },
				{ type: "number", re: JAVA_NUM },
				{ type: "function", re: /\b[\w$]+(?=\s*\()/ },
				{ type: "operator", re: /[+\-*/%&|^~<>=!?:.,;(){}[\]]/ }
			];
			default: return null;
		}
	}

	init() {
		const mainElement = document.body ?? document.documentElement;
		const style = getComputedStyle(mainElement);
		Object.entries(WUICodebox.#icons).forEach(([name, svg]) => {
			const prop = `--wui-codebox-${name}icon-src`;
			const current = style.getPropertyValue(prop).trim();
			if (!current || current === "none" || current.match(/^url\(\s*\)$/)) {
				mainElement.style.setProperty(prop, `url("data:image/svg+xml,${encodeURIComponent(svg)}")`);
			}
		});
		this.highlightAll();
	}

	highlightContent(content, options = {}) {
		const type = options.type ?? this.type;
		const lineNumbers = options.lineNumbering ?? this.lineNumbering;
		const highlighted = type ? this.#highlight(content, type) : this.#escapeHtml(content);
		const lines = this.#splitLines(highlighted);
		const inner = lines.map((line, i) => {
			const lineNumber = lineNumbers ? `<span class="ln" aria-hidden="true">${i + 1}</span>` : "";
			return `<div class="line">${lineNumber}${line}</div>`;
		}).join("");
		return `<div class="canvas">${inner}</div>`;
	}

	highlightElement(element, options = {}) {
		const type = this.#detectType(element);
		const content = element.textContent.replace(/^\n/, "").replace(/\n$/, "");
		let maxWidth = 0;
		element.dataset.style = this.style;
		element.innerHTML = this.highlightContent(content, Object.assign(options, { type }));
		element.previousElementSibling?.classList.contains("wui-codebox-copy") && element.previousElementSibling.remove();
		element.nextElementSibling?.classList.contains("wui-codebox-copy") && element.nextElementSibling.remove();
		if (this.copyButton) {
			const button = document.createElement("button");
			button.className = `wui-codebox-copy ${this.copyButtonPosition}`;
			button.setAttribute("aria-label", "Copy code");
			button.setAttribute("title", "Copy code");
			button.addEventListener("click", () => {
				navigator.clipboard.writeText(content).then(() => {
					button.classList.add("copied");
					setTimeout(() => button.classList.remove("copied"), 5000);
				});
			});
			this.copyButtonPosition === "bottom-right" ? element.after(button) : element.before(button);
		}
	}

	highlightAll(options = {}) {
		this.#htmlElements = document.querySelectorAll(this.selector);
		this.#htmlElements.forEach(element => {
			this.highlightElement(element, options);
		});
	}

	destroy() {
		this.#htmlElements = undefined;
	}
}

/*
HTML code:
<button class="wui-codebox-copy top-right" aria-label="Copy code" title="Copy code"></button>
<pre class="wui-codebox [js|ts|html|xml|css|json|py|rb|php|pl|sh|bash|md|java|kt|kts|swift]">
//code
</pre>
*/
