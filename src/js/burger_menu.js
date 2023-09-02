import { toggleModal, closeModal } from './utils.js';

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.modal.querySelectorAll('.mobile-menu-nav-link').forEach((element) => element.addEventListener('click', (e) => toggleModal(e, refs)));

  refs.openModalBtn.addEventListener('click', (e) => toggleModal(e, refs));
  refs.closeModalBtn.addEventListener('click', (e) => toggleModal(e, refs));
  refs.modal.addEventListener('click', (e) => closeModal(e, refs));
 
})();
