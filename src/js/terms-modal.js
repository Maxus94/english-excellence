import { toggleModal, closeModal } from './utils.js';

(() => {
  const refs = {
    openModalButtons: document.querySelectorAll('[data-terms-modal-open]'),
    closeModalButtons: document.querySelectorAll('[data-terms-modal-close]'),
    modal: document.querySelector('[data-terms-modal]'),
  };

  refs.openModalButtons.forEach((element) => element.addEventListener('click', (e) => toggleModal(e, refs)));
  refs.closeModalButtons.forEach((element) => element.addEventListener('click', (e) => toggleModal(e, refs)));
  refs.modal.addEventListener('click', (e) => closeModal(e, refs));
})();
