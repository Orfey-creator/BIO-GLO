!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=(e,t)=>{let n,o=0;e.style.display="none";const l=function(){e.style.display="block",e.style.opacity="1",document.documentElement.clientWidth>=768&&(n=requestAnimationFrame(l),o<1?(o+=.03,e.style.opacity=o):cancelAnimationFrame(n))},r=function(){n=requestAnimationFrame(r),o>0?(o-=.05,e.style.opacity=o):(e.style.display="none",cancelAnimationFrame(n))};t.forEach(e=>{e.addEventListener("click",l)}),e.addEventListener("click",e=>{let t=e.target;t.classList.contains("popup-close")?r():(t=t.closest(".popup-content"),t||r())})};var l=()=>{const e=document.querySelectorAll(".panel-group"),t=document.querySelectorAll("[role=tab]"),n=document.querySelectorAll("[role=tabpanel]");e.forEach(e=>{e.addEventListener("click",e=>{let o=e.target;o=o.closest(".panel-heading"),o&&t.forEach((e,t)=>{e===o&&(e=>{for(let t=0;t<n.length;t++)n[t].style.display=e===t?"block":"none"})(t)})})})};var r=()=>{document.querySelectorAll("input[name=user_phone]").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/([^+0-9]+)/gi,"")})});document.querySelectorAll("input[name=user_name]").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/([^а-я]+)/gi,"")})});const e=document.querySelector("input[name=user_quest]");e.addEventListener("input",()=>{e.value=e.value.replace(/([^.,а-я]+)/gi,"")})};var c=()=>{const e=document.getElementById("accordion"),t=e.querySelector("input[type=checkbox]"),n=document.getElementById("myonoffswitch-two"),o=e.querySelectorAll("a.button.construct-btn"),l=document.querySelectorAll("[role=tabpanel]"),r=document.querySelectorAll("#collapseTwo>div.panel-body>div"),c=document.getElementById("calc-result");r.forEach((e,t)=>{t>2&&(e.style.display="none")});const a=()=>{const o=e.querySelectorAll(".form-control.expand");let l=0,r=0,a=0,u=0,s=0,i=1e4,d=5e3;if(t.checked)l=i,r=i,2===parseFloat(o[0].value)&&(a=1.2*i,l=a,r=l),2===parseFloat(o[1].value)&&(l*=1.3),3===parseFloat(o[1].value)&&(l*=1.5),n.checked?l*=1.1:l*=1;else{l=i+d,r=i+d,2===parseFloat(o[0].value)&&(i*=1.2),2===parseFloat(o[1].value)&&(u=.3*i),3===parseFloat(o[1].value)&&(u=.5*i);const e=i+u;2===parseFloat(o[2].value)&&(d*=1.2),2===parseFloat(o[3].value)&&(s=.2*d),3===parseFloat(o[3].value)&&(s=.4*d);l=e+(d+s),n.checked?l*=1.2:l*=1}c.value=Math.round(l)};e.addEventListener("change",e=>{if(e.target.matches(".form-control")){parseFloat(e.target.value);a()}});t.addEventListener("change",e=>{e.target.checked?(r.forEach((e,t)=>{t>2&&(e.style.display="none")}),a()):(r.forEach((e,t)=>{t>2&&(e.style.display="inline-block")}),a())}),n.addEventListener("change",e=>{e.target.checked,a()}),o.forEach((e,t)=>{e.addEventListener("click",()=>{l[t+1].style.display="block"})}),a()};var a=()=>{const e=document.querySelector("button.add-sentence-btn");e.addEventListener("click",()=>{document.querySelectorAll(".col-xs-12.col-sm-6.col-md-4").forEach(e=>{e.classList.remove("hidden","visible-sm-block")}),e.style.display="none"})};var u=()=>{const e={},t=document.createElement("div");t.style.cssText="font-size: 2rem",t.id="stat-message";const n=document.querySelectorAll("input[name=user_quest], #calc-result, #collapseFour>.panel-body>input"),o=document.querySelector("#collapseFour>.panel-body>button");o.id="calcOut",o.type="submit",document.querySelector("button.construct-btn.call-btn").addEventListener("click",()=>{(n[0].value||n[1])&&(e.distance_home=n[0].value,e.calc_ressult=n[1].value)}),document.querySelector("button.director-btn.consultation-btn").addEventListener("click",t=>{t.preventDefault(),n[2].value&&(e.user_quest=n[2].value)}),document.querySelector("body").addEventListener("submit",n=>{if(n.target.closest(".main-form")||n.target.closest(".capture-form")){n.preventDefault(),n.target.append(t),t.textContent="Загрузка...";new FormData(n.target).forEach((t,n)=>{e[n]=t}),(e=>fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}))(e).then(e=>{if(200!==e.status)throw new Error("status network not 200");t.textContent="Спасибо! Мы с вами свяжемся",(()=>{[...document.querySelectorAll("form>input, #collapseFour>div>input"),...document.querySelectorAll("form>span>input")].forEach(e=>{e.value=""});const e=document.querySelector("#stat-message");setTimeout(()=>{e.parentNode.removeChild(e)},3e3)})()}).catch(e=>{t.textContent="Что то пошло не так...",console.error(e)})}})};o(document.querySelector(".popup-call"),document.querySelectorAll(".call-btn")),o(document.querySelector(".popup-discount"),document.querySelectorAll(".discount-btn")),o(document.querySelector(".popup-check"),document.querySelectorAll(".check-btn")),o(document.querySelector(".popup-consultation"),document.querySelectorAll(".director-btn")),l(),r(),c(),a(),u()}]);