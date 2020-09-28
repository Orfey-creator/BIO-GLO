const togglePopup = (popup, btnPopup) => {
	let animatePopupInterval;
	let n = 0;
	popup.style.display = 'none';
	//анимация открытия модального окна
	const openAnimatePopup = function () {
			popup.style.display = "block";
			popup.style.opacity = '1';
			if (document.documentElement.clientWidth >= 768) {
				animatePopupInterval = requestAnimationFrame(openAnimatePopup);
				if (n < 1) {
					n += 0.03;
					popup.style.opacity = n;
				} else {
					cancelAnimationFrame(animatePopupInterval);
				}
			}
		},
		//анимация закрытия модльного окна
		closeAnimatePopup = function() {
			animatePopupInterval = requestAnimationFrame(closeAnimatePopup);
			if (n > 0) {
				n -= 0.05;
				popup.style.opacity = n;
			} else {
				popup.style.display = "none";
				cancelAnimationFrame(animatePopupInterval);
			}
		};
	//открытие модального окна
	btnPopup.forEach((elem) => {
		elem.addEventListener("click", openAnimatePopup);
		elem.addEventListener('click', (e) => {
			e.preventDefault();
		});
	});
	//закрытие модального окна
	popup.addEventListener("click", (event) => {
		let target = event.target;
		if (target.classList.contains("popup-close")) {
			closeAnimatePopup();
		} else {
			target = target.closest(".popup-content");
			if (!target) {
				closeAnimatePopup();
			}
		}
	});
};
export default togglePopup;