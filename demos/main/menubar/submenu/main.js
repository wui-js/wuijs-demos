const init = () => {
	const output = document.body.querySelector(".output");
	const menubar = new WUIMenubar({
		selector: ".wui-menubar.my-menubar",
		centered: false,
		separations: true,
		//compacted: false,
		//expansive: true,
		autoClose: false,
		//hiddenPassiveBorder: false,
		topOptions: [{
			id: "logo",
			iconImage: "https://wuijs.dev/images/logo/wuijs-isotype-color.svg",
			label: "WUI /JS Lib",
			tooltipable: false,
			selectable: false
		}],
		mainOptions: [{
			id: "zones",
			iconClass: "wui-icon home-fill",
			label: "Home",
			selected: true
		}, {
			id: "settings",
			iconClass: "wui-icon gear-fill",
			label: "Settings",
			selectable: false
		}, {
			id: "tools",
			iconClass: "wui-icon pencil-fill",
			label: "Tools",
			buttons: [{
				id: "users",
				iconClass: "wui-icon palette-fill",
				label: "Colors"
			}, {
				id: "zoomin",
				iconClass: "wui-icon zoomin-line",
				label: "Zoom in"
			}, {
				id: "zoomout",
				iconClass: "wui-icon zoomout-line",
				label: "Zoom out"
			}, {
				id: "images",
				iconClass: "wui-icon image-fill",
				label: "Images"
			}]
		}, {
			id: "account",
			iconClass: "wui-icon person-circle-fill",
			photoImage: "",
			label: "Account",
			selectable: false
		}, {
			id: "notifications",
			iconClass: "wui-icon bell-fill",
			label: "Notifications",
			radio: false
		}],
		bottomOptions: [{
			id: "logout",
			iconClass: "wui-icon logout-line",
			label: "Logout",
			selectable: false
		}],
		onClick: (id) => {
			output.textContent = `Click - id button: "${id}"`;
		},
		onSelect: (id) => {
			output.textContent = `Select - id button: "${id}"`;
		}
	});
	menubar.init();
}

window.addEventListener("DOMContentLoaded", init);