const togglePopup = (popup, btnPopup) => {
	let animatePopupInterval;
	let n = 0;
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
	btnPopup.forEach((elem) => {
		elem.addEventListener("click", openAnimatePopup);
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
togglePopup(document.querySelector(".popup-call"), document.querySelectorAll(".call-btn"));
togglePopup(document.querySelector(".popup-discount"), document.querySelectorAll(".discount-btn"));
togglePopup(document.querySelector(".popup-check"), document.querySelectorAll(".check-btn"));
togglePopup(document.querySelector(".popup-consultation"), document.querySelectorAll(".director-btn"));

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
tabs();

const calc = () => {
	const calc = document.getElementById('accordion'),
		checkbox = calc.querySelector('input[type=checkbox]'),
		checkbox2 = document.getElementById('myonoffswitch-two'),
		nextBtn = calc.querySelectorAll('a.button.construct-btn'),
		tabContent = document.querySelectorAll("[role=tabpanel]"),
		secondWell = document.querySelectorAll('#collapseTwo>div.panel-body>div'),
		calcResult = document.getElementById('calc-result');
	secondWell.forEach((item, index) => {
		if (index > 2) {
			item.style.display = 'none';
		}
	});
	calc.addEventListener("change", (e) => {
		if (e.target.matches(".form-control")) {
			const optionValue = parseFloat(e.target.value);
			countSum(optionValue);
		}
	});
	const nextStep = () => {
		nextBtn.forEach((item, index) => {
			item.addEventListener('click', () => {
				tabContent[index + 1].style.display = 'block';
			});
		});
	};
	checkbox.addEventListener('change', (e) => {
		if (e.target.checked) {
			// Checkbox is checked..
			secondWell.forEach((item, index) => {
				if (index > 2) {
					item.style.display = 'none';
				}
			});
			countSum();
		} else {
			// Checkbox is not checked..
			secondWell.forEach((item, index) => {
				if (index > 2) {
					item.style.display = 'inline-block';
				}
			});
			countSum();
		}
	});
	checkbox2.addEventListener('change', (e) => {
		if (e.target.checked) {
			// Checkbox is checked..
			countSum();
		} else {
			// Checkbox is not checked..
			countSum();
		}
	});

	nextStep();

	const countSum = () => {
		const select = calc.querySelectorAll(".form-control.expand");
		let total = 0,
			firstCost = 0,
			change = 0,
			circle = 0,
			circle2 = 0,
			camOne = 10000,
			camTwo = 5000;
		//если однокамерный
		if (checkbox.checked) {
			total = camOne;
			firstCost = camOne;
			if (parseFloat(select[0].value) === 2) {
				change = camOne * 1.2;
				total = change;
				firstCost = total;
			}
			if (parseFloat(select[1].value) === 2) {
				total *= 1.3;
			}
			if (parseFloat(select[1].value) === 3) {
				total *= 1.5;
			}
			checkbox2.checked ? total += firstCost * 0.1 : total *= 1;
		} else { //если двухкамерный
			total = camOne + camTwo;
			firstCost = camOne + camTwo;
			//первая камера
			if (parseFloat(select[0].value) === 2) {
				camOne *= 1.2;
			}
			if (parseFloat(select[1].value) === 2) {
				circle = camOne * 0.3;
			}
			if (parseFloat(select[1].value) === 3) {
				circle = camOne * 0.5;
			}
			const sumFirstCam = camOne + circle;
			//вторая камера
			if (parseFloat(select[2].value) === 2) {
				camTwo *= 1.2;
			}
			if (parseFloat(select[3].value) === 2) {
				circle2 = camTwo * 0.2;
			}
			if (parseFloat(select[3].value) === 3) {
				circle2 = camTwo * 0.4;
			}
			const sumSecondtCam = camTwo + circle2;
			total = sumFirstCam + sumSecondtCam;
			checkbox2.checked ? total *= 1.2 : total *= 1;
		}
		calcResult.value = total;
	};
	countSum();
};
calc();

const more = () => {
	const moreBtn = document.querySelector('button.add-sentence-btn');
	moreBtn.addEventListener('click', () => {
		const otherBlocks = document.querySelectorAll('.col-xs-12.col-sm-6.col-md-4');
		otherBlocks.forEach((item) => {
			console.log(item);
			item.classList.remove('hidden', 'visible-sm-block');
		});
		moreBtn.style.display = 'none';
	});
};
more();
