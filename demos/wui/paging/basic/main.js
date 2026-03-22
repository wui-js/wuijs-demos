const init = () => {
	const output = document.body.querySelector(".my-output");
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
}

window.addEventListener("DOMContentLoaded", init);