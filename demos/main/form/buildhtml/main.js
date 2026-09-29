const wuiComponents = {};

const bodyItems = [{
	items: [
		{
			name: "nickname",
			type: "text",
			label: "Nickname",
			icon: { class: "wui-icon person-line" }
		}, {
			name: "role",
			type: "wui-selectpicker",
			label: "Role",
			icon: { class: "wui-icon shield-line" },
			options: [
				{ value: "user", text: "User" },
				{ value: "admin", text: "Admin" }
			]
		}, {
			name: "birth",
			type: "wui-datepicker",
			label: "Birth date",
			icon: { class: "wui-icon calendar-line" }
		}, {
			name: "bio",
			type: "textarea",
			label: "Bio",
			autosize: true,
			icon: { class: "wui-icon file-text-line" }
		}, {
			name: "active",
			type: "wui-switch",
			label: "Active",
			inputId: "activeInput",
			value: "1",
			noborder: true
		}
	]
}];

const footerItems = [
	{ class: "wui-button cancel", text: "cancel" },
	{ class: "wui-button submit", text: "accept" }
];

const printOutput = data => {
	const output = document.querySelector(".output");
	output.innerHTML = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
};

const init = () => {
	wuiComponents.form = new WUIForm({
		selector: ".wui-form.my-form",
		bodyItems,
		footerItems,
		submit: false,
		onSubmit: () => {
			const data = Object.fromEntries(wuiComponents.form.getFormData());
			printOutput(data);
		}
	});
	wuiComponents.form.init();
	wuiComponents.role = new WUISelectpicker({
		selector: ".wui-selectpicker",
		onOpen: () => { closePickers("role"); }
	});
	wuiComponents.birth = new WUIDatepicker({
		selector: ".wui-datepicker",
		boxAlign: "right",
		onOpen: () => { closePickers("birth"); }
	});
	wuiComponents.active = new WUISwitch({
		selector: ".wui-switch"
	});
	wuiComponents.cancelButton = new WUIButton({
		selector: ".wui-button.cancel",
		onClick: () => { wuiComponents.form.reset(); printOutput({}); }
	});
	wuiComponents.submitButton = new WUIButton({
		selector: ".wui-button.submit",
		submit: true
	});
	Object.values(wuiComponents).forEach(component => {
		component.init();
	});
};

const closePickers = excludeId => {
	Object.entries(wuiComponents).forEach(([id, component]) => {
		if (component.constructor.name.match(/picker/i) && id !== excludeId && component.close) {
			component.close();
		}
	});
};

window.addEventListener("DOMContentLoaded", init);
