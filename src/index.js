`use strict`;

import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import ban from './modules/ban';
import calc from './modules/calc';
import more from './modules/more';
import sendForm from './modules/sendForm';

//Модальные окна
togglePopup(document.querySelector(".popup-call"), document.querySelectorAll(".call-btn"));
togglePopup(document.querySelector(".popup-discount"), document.querySelectorAll(".discount-btn"));
togglePopup(document.querySelector(".popup-check"), document.querySelectorAll(".check-btn"));
togglePopup(document.querySelector(".popup-consultation"), document.querySelectorAll(".director-btn"));
//Табы
tabs();
//запрет на ввод
ban();
//собственно сам, его величество, калькулятор
calc();
//кнопочка больше
more();
//send-ajax-form
sendForm();