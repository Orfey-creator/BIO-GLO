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
export default ban;