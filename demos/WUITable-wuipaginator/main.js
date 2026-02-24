const wuiComponents = {};

const data = [
	{ id: "row1", data: ["A 1", "B 1", "C 1", "D 1"] },
	{ id: "row2", data: ["A 2", "B 2", "C 2", "D 2"], enabled: false },
	{ id: "row3", data: ["A 3", "B 3", "C 3", "D 3"] },
	{ id: "row4", data: ["A 4", "B 4", "C 4", "D 4"] },
	{ id: "row5", data: ["A 5", "B 5", "C 5", "D 5"] },
	{ id: "row6", data: ["A 6", "B 6", "C 6", "D 6"] },
	{ id: "row7", data: ["A 7", "B 7", "C 7", "D 7"] },
	{ id: "row8", data: ["A 8", "B 8", "C 8", "D 8"] },
	{ id: "row9", data: ["A 9", "B 9", "C 9", "D 9"] },
	{ id: "row10", data: ["A 10", "B 10", "C 10", "D 10"] },
	{ id: "row11", data: ["A 11", "B 11", "C 11", "D 11"] },
	{ id: "row12", data: ["A 12", "B 12", "C 12", "D 12"] }
];

const init = () => {
	const output = document.body.querySelector(".my-output");
	wuiComponents.table = new WUITable({
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
		rows: data,
		align: "center",
		//valign: "middle",
		//sortable: true,
		//resizable: true,
		//draggable: true,
		//selectable: true,
		onPrint: (page, pages, total) => {
			/*if (wuiComponents.table.hasPrevPage()) {
				firstButton.classList.remove("disabled");
				prevButton.classList.remove("disabled");
			} else {
				firstButton.classList.add("disabled");
				prevButton.classList.add("disabled");
			}
			if (wuiComponents.table.hasNextPage()) {
				lastButton.classList.remove("disabled");
				nextButton.classList.remove("disabled");
			} else {
				lastButton.classList.add("disabled");
				nextButton.classList.add("disabled");
			}
			paging.innerHTML = `${page}/${pages} (${total})`;*/
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
	wuiComponents.paginator = new WUIPaginator({
		selector: ".wui-paginator.my-paginator",
		currentPage: 1,
		totalPages: 10,
		totalRecords: 12,
		onChange: (newPage, oldPage) => {

		}
	});
	firstButton.addEventListener("click", () => {
		if (!firstButton.classList.contains("disabled")) {
			table.firstPage();
		}
	});
	prevButton.addEventListener("click", () => {
		if (!prevButton.classList.contains("disabled")) {
			table.prevPage();
		}
	});
	lastButton.addEventListener("click", () => {
		if (!lastButton.classList.contains("disabled")) {
			table.lastPage();
		}
	});
	nextButton.addEventListener("click", () => {
		if (!nextButton.classList.contains("disabled")) {
			table.nextPage();
		}
	});
	Object.values(wuiComponents).forEach((component) => {
		component.init();
	});
}

window.addEventListener("DOMContentLoaded", init);