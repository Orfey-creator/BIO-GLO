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
	countSum();
};
export default calc;