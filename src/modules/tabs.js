const tabs = () => {
	const tabHeader = document.querySelectorAll(".panel-group"),
		tab = document.querySelectorAll("[role=tab]"),
		tabContent = document.querySelectorAll("[role=tabpanel]");
	const toggleTabContent = (index) => {
		for (let i = 0; i < tabContent.length; i++) {
			if (index === i) {
				tabContent[i].style.display = 'block';
			} else {
				tabContent[i].style.display = 'none';
			}
		}
	};
	tabHeader.forEach((elem) => {
		elem.addEventListener("click", (event) => {
			let target = event.target;
			target = target.closest(".panel-heading");
			if (target) {
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				});
			}
		});
	});
};
export default tabs;