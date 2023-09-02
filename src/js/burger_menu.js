(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', closeModal);

  function toggleBodyScroll() {
    document.documentElement.classList.toggle('no-scroll');
  }

  function closeModal(e) {
    if (e.code === 'Escape') {
      refs.modal.classList.add('is-hidden');
      window.removeEventListener('keydown', closeModal);
      toggleBodyScroll();
    }
    if (e.target === refs.modal) {
      refs.modal.classList.toggle('is-hidden');
      window.removeEventListener('keydown', closeModal);
      toggleBodyScroll();
    }
  }

  function toggleModal() {
    window.addEventListener('keydown', closeModal);
    refs.modal.classList.toggle('is-hidden');
    toggleBodyScroll();
  }
})();
