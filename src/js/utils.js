export function toggleBodyScroll() {
    document.documentElement.classList.toggle('no-scroll');
}

export function closeModal(e, refs) {
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

export function toggleModal(e, refs) {
    window.addEventListener('keydown', (e) => closeModal(e, refs));
    refs.modal.classList.toggle('is-hidden');
    toggleBodyScroll();
}
