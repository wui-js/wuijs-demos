const init = () => {
	const firstLink = document.body.querySelector(".my-link.first");
	const prevLink = document.body.querySelector(".my-link.prev");
	const nextLink = document.body.querySelector(".my-link.next");
	const lastLink = document.body.querySelector(".my-link.last");
	const paging = document.body.querySelector(".my-paging");
	const output = document.body.querySelector(".my-output");
	const table = new WUITable({
		selector: ".wui-table.my-table",
		//width: "auto",
		paging: 5,
		resetPaging: true,
		columns: [{
			label: "A Column",
			width: 100
		}, {
			label: "B Column",
			width: 100
		}, {
			label: "C Column",
			width: 100
		}, {
			label: "D Column",
			width: 100
		}],
		rows: [{
			id: "row1", data: ["A 1", "B 1", "C 1", "D 1"]
		}, {
			id: "row2", data: ["A 2", "B 2", "C 2", "D 2"], enabled: false
		}, {
			id: "row3", data: ["A 3", "B 3", "C 3", "D 3"]
		}, {
			id: "row4", data: ["A 4", "B 4", "C 4", "D 4"]
		}, {
			id: "row5", data: ["A 5", "B 5", "C 5", "D 5"]
		}, {
			id: "row6", data: ["A 6", "B 6", "C 6", "D 6"]
		}, {
			id: "row7", data: ["A 7", "B 7", "C 7", "D 7"]
		}, {
			id: "row8", data: ["A 8", "B 8", "C 8", "D 8"]
		}, {
			id: "row9", data: ["A 9", "B 9", "C 9", "D 9"]
		}, {
			id: "row10", data: ["A 10", "B 10", "C 10", "D 10"]
		}, {
			id: "row11", data: ["A 11", "B 11", "C 11", "D 11"]
		}, {
			id: "row12", data: ["A 12", "B 12", "C 12", "D 12"]
		}],
		align: "center",
		//valign: "middle",
		//sortable: true,
		//resizable: true,
		//draggable: true,
		//selectable: true,
		onPrint: (page, pages, total) => {
			if (table.hasPrevPage()) {
				firstLink.classList.remove("disabled");
				prevLink.classList.remove("disabled");
			} else {
				firstLink.classList.add("disabled");
				prevLink.classList.add("disabled");
			}
			if (table.hasNextPage()) {
				lastLink.classList.remove("disabled");
				nextLink.classList.remove("disabled");
			} else {
				lastLink.classList.add("disabled");
				nextLink.classList.add("disabled");
			}
			paging.innerHTML = `${page}/${pages} (${total})`;
		},
		onClick: (index, id, enabled, options) => {
			output.textContent = `Click row - index: ${index}, id: ${id}, enabled: ${enabled}`;
		},
		onDblClick: (index, id, enabled, options) => {
			output.textContent = `Double-Click row - index: ${index}, id: ${id}, enabled: ${enabled}`;
		},
		onSelect: (index, id, enabled, options) => {
			output.textContent = `Select row - index: ${index}, id: ${id}, enabled: ${enabled}`;
		}
	});
	table.init();
	firstLink.addEventListener("click", () => {
		if (!firstLink.classList.contains("disabled")) {
			table.firstPage();
		}
	});
	prevLink.addEventListener("click", () => {
		if (!prevLink.classList.contains("disabled")) {
			table.prevPage();
		}
	});
	lastLink.addEventListener("click", () => {
		if (!lastLink.classList.contains("disabled")) {
			table.lastPage();
		}
	});
	nextLink.addEventListener("click", () => {
		if (!nextLink.classList.contains("disabled")) {
			table.nextPage();
		}
	});
}

window.addEventListener("DOMContentLoaded", init);