(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",n),o.closeModalBtn.addEventListener("click",n);function n(){o.modal.classList.toggle("is-hidden")}})();(()=>{const o={openModalBtn:document.querySelector("[data-policy-modal-open]"),closeModalBtn:document.querySelector("[data-policy-modal-close]"),modal:document.querySelector("[data-policy-modal]")};o.openModalBtn.addEventListener("click",l),o.closeModalBtn.addEventListener("click",l),o.modal.addEventListener("click",n);function n(d){d.code==="Escape"&&(o.modal.classList.add("is-hidden"),document.removeEventListener("keydown",n)),d.target===o.modal&&o.modal.classList.toggle("is-hidden")}function l(){window.addEventListener("keydown",n),o.modal.classList.toggle("is-hidden")}})();
