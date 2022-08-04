'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const btnsShowModalWindow = document.querySelectorAll('.show-modal-window');

function showModalWindow() {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModalWindow() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnsShowModalWindow.length; i++) {
  btnsShowModalWindow[i].onclick = showModalWindow;
}

btnCloseModalWindow.onclick = closeModalWindow;
overlay.onclick = closeModalWindow;

document.onkeydown = e => {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
  }
};
