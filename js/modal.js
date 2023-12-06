const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelectorAll('.modal-btn-close');

const toggleModal = modalId => {
  modal.classList.toggle('is-hidden');
};

modalBtnOpen.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal-target');
    toggleModal(modalId);
  });
});

modalBtnClose.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.closest('.backdrop').id;
    toggleModal(modalId);
  });
});
