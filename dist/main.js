!function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=(e,t)=>{let o,n=0;e.style.display="none";const l=function(){e.style.display="block",e.style.opacity="1",document.documentElement.clientWidth>=768&&(o=requestAnimationFrame(l),n<1?(n+=.03,e.style.opacity=n):cancelAnimationFrame(o))},r=function(){o=requestAnimationFrame(r),n>0?(n-=.05,e.style.opacity=n):(e.style.display="none",cancelAnimationFrame(o))};t.forEach(e=>{e.addEventListener("click",l),e.addEventListener("click",e=>{e.preventDefault()})}),e.addEventListener("click",e=>{let t=e.target;t.classList.contains("popup-close")?r():(t=t.closest(".popup-content"),t||r())})};var l=()=>{const e=document.querySelectorAll(".panel-group"),t=document.querySelectorAll("[role=tab]"),o=document.querySelectorAll("[role=tabpanel]");e.forEach(e=>{e.addEventListener("click",e=>{let n=e.target;n=n.closest(".panel-heading"),n&&t.forEach((e,t)=>{e===n&&(e=>{for(let t=0;t<o.length;t++)o[t].style.display=e===t?"block":"none"})(t)})})})};var r=()=>{document.querySelectorAll("input[name=user_phone]").forEach(e=>{console.log(e),e.addEventListener("input",()=>{e.value=e.value.replace(/([^+0-9]+)/gi,""),e.value.toString().length<11?(console.log(e.value.toString().length),e.parentNode.querySelector("button[type=submit]").disabled=!0):e.parentNode.querySelector("button[type=submit]").disabled=!1})}),document.querySelector("#collapseFour>.panel-body>input").addEventListener("input",e=>{e.target.value=e.target.value.replace(/([^0-9]+)/gi,"")});document.querySelectorAll("input[name=user_name]").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/([^а-я]+)/gi,"")})});const e=document.querySelector("input[name=user_quest]");e.addEventListener("input",()=>{e.value=e.value.replace(/([^.,а-я]+)/gi,"")}),document.querySelectorAll("a").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault()})})};var c=()=>{const e=document.getElementById("accordion"),t=e.querySelector("input[type=checkbox]"),o=document.getElementById("myonoffswitch-two"),n=e.querySelectorAll("a.button.construct-btn"),l=document.querySelectorAll("[role=tabpanel]"),r=document.querySelectorAll("#collapseTwo>div.panel-body>div"),c=document.getElementById("calc-result");r.forEach((e,t)=>{t>2&&(e.style.display="none")});const a=()=>{const n=e.querySelectorAll(".form-control.expand");let l=0,r=0,a=0,u=0,s=0,d=1e4,i=5e3;if(t.checked)l=d,r=d,2===parseFloat(n[0].value)&&(a=1.2*d,l=a,r=l),2===parseFloat(n[1].value)&&(l*=1.3),3===parseFloat(n[1].value)&&(l*=1.5),o.checked?l*=1.1:l*=1;else{l=d+i,r=d+i,2===parseFloat(n[0].value)&&(d*=1.2),2===parseFloat(n[1].value)&&(u=.3*d),3===parseFloat(n[1].value)&&(u=.5*d);const e=d+u;2===parseFloat(n[2].value)&&(i*=1.2),2===parseFloat(n[3].value)&&(s=.2*i),3===parseFloat(n[3].value)&&(s=.4*i);l=e+(i+s),o.checked?l*=1.2:l*=1}c.value=Math.round(l)};e.addEventListener("change",e=>{if(e.target.matches(".form-control")){parseFloat(e.target.value);a()}});t.addEventListener("change",e=>{e.target.checked?(r.forEach((e,t)=>{t>2&&(e.style.display="none")}),a()):(r.forEach((e,t)=>{t>2&&(e.style.display="inline-block")}),a())}),o.addEventListener("change",e=>{e.target.checked,a()}),n.forEach((e,t)=>{e.addEventListener("click",()=>{l[t].style.display="none",l[t+1].style.display="block"})}),a()};var a=()=>{const e=document.querySelector("button.add-sentence-btn");e.addEventListener("click",()=>{document.querySelectorAll(".col-xs-12.col-sm-6.col-md-4").forEach(e=>{e.classList.remove("hidden","visible-sm-block")}),e.style.display="none"})};var u=()=>{let e={};const t=document.createElement("div");t.style.cssText="font-size: 2rem",t.id="stat-message";const o=document.querySelectorAll("input[name=user_quest], #calc-result, #collapseFour>.panel-body>input"),n=(document.querySelector("#collapseFour>.panel-body>button"),document.querySelector("input[type=checkbox]")),l=document.getElementById("myonoffswitch-two"),r=document.querySelectorAll(".form-control.expand");document.querySelector("button.construct-btn.call-btn").addEventListener("click",()=>{(o[0].value||o[1])&&(n.checked?e.cams="1":e.cams="2",e.diameter_first=r[0].value,e.circle_first=r[1].value,l.checked?(e.bottom=!0,e.diameter_two=r[2].value,e.circle_two=r[3].value):e.bottom=!1,e.distance_home=o[0].value,e.calc_ressult=o[1].value)}),document.querySelector("button.director-btn.consultation-btn").addEventListener("click",t=>{t.preventDefault(),o[2].value&&(e.user_quest=o[2].value)}),document.querySelector("body").addEventListener("submit",o=>{if(o.target.closest(".main-form")||o.target.closest(".capture-form")){o.preventDefault(),o.target.append(t),t.textContent="Загрузка...";new FormData(o.target).forEach((t,o)=>{e[o]=t}),(e=>fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}))(e).then(o=>{if(200!==o.status)throw new Error("status network not 200");t.textContent="Спасибо! Мы с вами свяжемся",(()=>{[...document.querySelectorAll("form>input, #collapseFour>div>input"),...document.querySelectorAll("form>span>input")].forEach(e=>{e.value=""});const e=document.querySelector("#stat-message");setTimeout(()=>{e.parentNode.removeChild(e)},3e3)})(),e={}}).catch(o=>{t.textContent="Что то пошло не так...",console.error(o),e={}})}})};n(document.querySelector(".popup-call"),document.querySelectorAll(".call-btn")),n(document.querySelector(".popup-discount"),document.querySelectorAll(".discount-btn")),n(document.querySelector(".popup-check"),document.querySelectorAll(".check-btn")),n(document.querySelector(".popup-consultation"),document.querySelectorAll(".director-btn")),l(),r(),c(),a(),u()}]);