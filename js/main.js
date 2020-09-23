const togglePopup = () => {
	let animatePopupInterval;
	let n = 0;
	const popup = document.querySelector(".popup-call"),
		btnPopup = document.querySelectorAll(".call-btn");
	popup.style.display = 'none';
	//анимация открытия модального окна
	const openAnimatePopup = function() {
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
	btnPopup.forEach((elem) =>
		elem.addEventListener("click", openAnimatePopup)
	);
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
togglePopup();

const sendForm = () => {
	const errorMessage = "Что то пошло не так...",
		loadMessage = "Загрузка...",
		successMessage = "Спасибо! Мы с вами свяжемся",
		statusMessage = document.createElement("div");
	statusMessage.style.cssText = "font-size: 2rem";
	statusMessage.id = "stat-message";
	//форма
	document.querySelector('body').addEventListener("submit", (e) => {
		if (e.target.closest(".main-form") || e.target.closest(".capture-form") || e.target.closest('.director-form')) {

			e.preventDefault();
			e.target.append(statusMessage);
			statusMessage.textContent = loadMessage;
			const formData = new FormData(e.target);
			const body = {};
			formData.forEach((value, key) => {
				body[key] = value;
			});
			postData(body)
				.then((response) => {
					if (response.status !== 200) {
						throw new Error("status network not 200");
					}
					statusMessage.textContent = successMessage;
					clearForms();
				})
				.catch((error) => {
					statusMessage.textContent = errorMessage;
					console.error(error);
				});
		}

	});

	const postData = (body) => fetch("server.php", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
		credentials: 'include',
	});
	const clearForms = () => {
		const clear = document.querySelectorAll(".row>div>input");
		const clearModal = document.querySelectorAll("form>div>input");
		const clearAll = [...clear, ...clearModal];
		clearAll.forEach((elem) => {
			elem.value = "";
		});
		const statMessage = document.querySelector("#stat-message");
		setTimeout(() => {
			statMessage.parentNode.removeChild(statMessage);
		}, 3000);
	};
};
sendForm();

const ban = () => {
	//ввод только цифр в номере телефона
	const tel = document.querySelectorAll("input[name=user_phone]");
	tel.forEach((elem) => {
		elem.addEventListener("input", () => {
			elem.value = elem.value.replace(/([^+0-9]+)/gi, '');
		});
	});
	//запрет ввода цифр в сообщении и имени пользователя
	const text = document.querySelectorAll(
		"input[name=user_name]"
	);
	text.forEach((elem) => {
		elem.addEventListener("input", () => {
			elem.value = elem.value.replace(/([^а-я]+)/gi, '');
		});
	});
	const message = document.querySelector('input[name=user_quest]');
	message.addEventListener("input", () => {
		message.value = message.value.replace(/([^.,а-я]+)/gi, '');
	});
};
ban();
