import"./main-DdCVXXLm.js";const i=document.querySelector("#name"),o=document.querySelector("#email"),l=document.querySelector("#msg"),m=document.querySelector(".send-btn"),s=document.querySelector(".msg-status"),r=(t,e)=>{const c=t.parentElement,a=c.querySelector(".error-text");c.classList.add("error-form"),a.textContent=e},n=t=>{t.parentElement.classList.remove("error-form")},u=t=>{t.forEach(e=>{e.value===""?r(e,e.placeholder):n(e)})},d=t=>{/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(o.value)?n(o):r(o,"Podany adres e-mail jest niepoprawny")};console.log(document.location.search);document.location.search==="?mail_status=sent"&&(s.classList.add("success"),s.textContent="Wiadomość wysłana!",setTimeout(()=>{s.classList.remove("success")},3e3));document.location.search==="?mail_status=error"&&(s.classList.add("error"),s.textContent="Wystąpił błąd.",setTimeout(()=>{s.classList.remove("error")},3e3));m.addEventListener("click",t=>{u([i,o,l]),d()});
