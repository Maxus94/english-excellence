import { toggleModal, closeModal } from './utils.js';

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtns: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtns.forEach(element =>
    element.addEventListener('click', toggleModal)
  );
  // refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtn.addEventListener('click', e => toggleModal(e, refs));
  refs.closeModalBtn.addEventListener('click', e => toggleModal(e, refs));
  refs.modal.addEventListener('click', e => closeModal(e, refs));
})();
