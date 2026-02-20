const init = () => {
	const firstLink = document.body.querySelector(".my-link.first");
	const prevLink = document.body.querySelector(".my-link.prev");
	const nextLink = document.body.querySelector(".my-link.next");
	const lastLink = document.body.querySelector(".my-link.last");
	const paging = document.body.querySelector(".my-paging");
	const output = document.body.querySelector(".my-output");
	const list = new WUIList({
		selector: ".wui-list.my-list",
		paging: 5,
		columns: [{
			width: 10
		}, {
			width: 60,
			align: "center"
		}, {
			align: "left"
		}, {
			width: 60,
			align: "center"
		}],
		rows: [{
			id: "row1", data: ["", "A 1", "B 1", "C 1"]
		}, {
			id: "row2", data: ["", "A 2", "B 2", "C 2"], enabled: false
		}, {
			id: "row3", data: ["", "A 3", "B 3", "C 3"]
		}, {
			id: "row4", data: ["", "A 4", "B 4", "C 4"]
		}, {
			id: "row5", data: ["", "A 5", "B 5", "C 5"]
		}, {
			id: "row6", data: ["", "A 6", "B 6", "C 6"]
		}, {
			id: "row7", data: ["", "A 7", "B 7", "C 7"]
		}, {
			id: "row8", data: ["", "A 8", "B 8", "C 8"]
		}, {
			id: "row9", data: ["", "A 9", "B 9", "C 9"]
		}, {
			id: "row10", data: ["", "A 10", "B 10", "C 10"]
		}, {
			id: "row11", data: ["", "A 11", "B 11", "C 11"]
		}, {
			id: "row12", data: ["", "A 12", "B 12", "C 12"]
		}],
		buttons: [{
			iconClass: "wui-icon pencil-fill",
			bgcolor: "#1e90ff",
			onClick: (index, id) => {
				output.textContent = `Click edit button - index: ${index}, id: ${id}`;
			},
			enabled: true
		}, {
			iconClass: "wui-icon trash-fill",
			bgcolor: "#f44343",
			onClick: (index, id) => {
				output.textContent = `Click delete button - index: ${index}, id: ${id}`;
			},
			enabled: true
		}],
		buttonsStyle: "stretch",
		onPrint: (page, pages, total) => {
			if (list.hasPrevPage()) {
				firstLink.classList.remove("disabled");
				prevLink.classList.remove("disabled");
			} else {
				firstLink.classList.add("disabled");
				prevLink.classList.add("disabled");
			}
			if (list.hasNextPage()) {
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
		}
	});
	list.init();
	firstLink.addEventListener("click", () => {
		if (!firstLink.classList.contains("disabled")) {
			list.firstPage();
		}
	});
	prevLink.addEventListener("click", () => {
		if (!prevLink.classList.contains("disabled")) {
			list.prevPage();
		}
	});
	lastLink.addEventListener("click", () => {
		if (!lastLink.classList.contains("disabled")) {
			list.lastPage();
		}
	});
	nextLink.addEventListener("click", () => {
		if (!nextLink.classList.contains("disabled")) {
			list.nextPage();
		}
	});
}

window.addEventListener("DOMContentLoaded", init);