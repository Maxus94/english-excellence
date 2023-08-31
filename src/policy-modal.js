(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-policy-modal-open]'),
    closeModalBtn: document.querySelector('[data-policy-modal-close]'),
    modal: document.querySelector('[data-policy-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', closeModal);

  function closeModal(e) {
    if (e.code === 'Escape') {
      refs.modal.classList.add('is-hidden');
      document.removeEventListener('keydown', closeModal);
    }
    if (e.target === refs.modal) {
      refs.modal.classList.toggle('is-hidden');
    }
  }

  function toggleModal() {
    window.addEventListener('keydown', closeModal);
    refs.modal.classList.toggle('is-hidden');
  }
})();
