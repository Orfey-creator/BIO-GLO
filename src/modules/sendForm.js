const sendForm = () => {
	const errorMessage = "Что то пошло не так...",
		loadMessage = "Загрузка...",
		successMessage = "Спасибо! Мы с вами свяжемся",
		statusMessage = document.createElement("div");
	statusMessage.style.cssText = "font-size: 2rem";
	statusMessage.id = "stat-message";
	//форма
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
	const inputCatch = document.querySelectorAll(
		"input[name=user_quest], #calc-result, #collapseFour>.panel-body>input"
	);

	const calcOut = document.querySelector("#collapseFour>.panel-body>button");
	calcOut.id = "calcOut";
	calcOut.type = "submit";
	document.querySelector('button.director-btn.consultation-btn').addEventListener('click', (e) => {
		e.preventDefault();
	});

	document.querySelector('body').addEventListener("submit", (e) => {
		if (e.target.matches('button.director-btn.consultation-btn')) {
			e.preventDefault();
			console.log(e.target);
		}
		if (e.target.closest(".main-form") || e.target.closest(".capture-form")) {

			e.preventDefault();
			e.target.append(statusMessage);
			statusMessage.textContent = loadMessage;
			const formData = new FormData(e.target);

			const body = {};

			if (inputCatch[0].value || inputCatch[1]) {
				body.distance_home = inputCatch[0].value;
				body.calc_ressult = inputCatch[1].value;
			}
			if (inputCatch[2].value) {
				body.user_quest = inputCatch[2].value;
			}
			formData.forEach((value, key) => {
				body[key] = value;
			});


			// inputCatch.forEach((value, key) => {
			// 	body[key] = value;
			// });
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
	
};
export default sendForm;