export function closeModal(e, refs) {
    if (e.code === 'Escape') {
        refs.modal.classList.add('is-hidden');
        document.documentElement.classList.remove('no-scroll');
    }
    if (e.target === refs.modal) {
        refs.modal.classList.toggle('is-hidden');
        document.documentElement.classList.remove('no-scroll');
    }
}

export function toggleModal(e, refs) {
    const handleKeyDown = (e) => {
        closeModal(e, refs);
        window.removeEventListener('keydown', handleKeyDown);
    };
    window.addEventListener('keydown', handleKeyDown);
    refs.modal.classList.toggle('is-hidden');
    document.documentElement.classList.toggle('no-scroll');
}
