(() => {
  const refs = {
    openModalButtons: document.querySelectorAll('[data-policy-modal-open]'),
    closeModalButtons: document.querySelectorAll('[data-policy-modal-close]'),
    modal: document.querySelector('[data-policy-modal]'),
  };

  refs.openModalButtons.forEach((element) => element.addEventListener('click', toggleModal));
  refs.closeModalButtons.forEach((element) => element.addEventListener('click', toggleModal));
  refs.modal.addEventListener('click', closeModal);

  function toggleBodyScroll() {
    document.documentElement.classList.toggle('no-scroll');
  }

  function closeModal(e) {
    if (e.code === 'Escape') {
      refs.modal.classList.add('is-hidden');
      document.removeEventListener('keydown', closeModal);
      toggleBodyScroll();
    }
    if (e.target === refs.modal) {
      refs.modal.classList.toggle('is-hidden');
      toggleBodyScroll();
    }
  }

  function toggleModal() {
    window.addEventListener('keydown', closeModal);
    refs.modal.classList.toggle('is-hidden');
    toggleBodyScroll();
  }
})();
