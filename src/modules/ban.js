const ban = () => {
	//ввод только цифр в номере телефона
	const tel = document.querySelectorAll("input[name=user_phone]");
	tel.forEach((elem) => {
		console.log(elem);
		elem.addEventListener("input", () => {
			elem.value = elem.value.replace(/([^+0-9]+)/gi, '');
			
			if (elem.value.toString().length < 11) {
				console.log(elem.value.toString().length);
				elem.parentNode.querySelector('button[type=submit]').disabled = true;
			} else {
				elem.parentNode.querySelector('button[type=submit]').disabled = false;
			}
		});
	});
	//запрет ввода в инпут расстояние до дома
	document.querySelector('#collapseFour>.panel-body>input').addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/([^0-9]+)/gi, '');
	});
	//запрет ввода цифр в сообщении и имени пользователя
	const text = document.querySelectorAll("input[name=user_name]");
	text.forEach((elem) => {
		elem.addEventListener("input", () => {
			elem.value = elem.value.replace(/([^а-я]+)/gi, '');
		});
	});
	const message = document.querySelector('input[name=user_quest]');
	message.addEventListener("input", () => {
		message.value = message.value.replace(/([^.,а-я]+)/gi, '');
	});
	document.querySelectorAll('a').forEach((elem) => {
		elem.addEventListener('click', (e) => {
			e.preventDefault();
		});
	});
};
export default ban;
