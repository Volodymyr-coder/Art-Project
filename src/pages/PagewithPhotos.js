import { USER_INTERFACE_ID } from '../constants.js';
import { fetchAndRenderPhotos } from '../views/fetchAndRenderPhotos.js';

export const initPagePhoto = (userName) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  userInterface.classList.add('none');

  const welcomeDiv = document.createElement('div');
  const h1 = document.createElement('h1');

  h1.textContent = `${userName} welcome to the World of Art!`;
  h1.classList.add('h1');
  const formElem = document.createElement('form');

  const inputEl = document.createElement('input');

  welcomeDiv.appendChild(h1);
  welcomeDiv.appendChild(formElem);
  welcomeDiv.classList.add('welcomeDiv');

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'SHOW ART';
  submitBtn.classList.add('show-art');

  formElem.classList.add('formElem')
  formElem.appendChild(inputEl);
  formElem.appendChild(submitBtn);

  document.body.appendChild(welcomeDiv);

  function getInputValue() {
    let value = inputEl.value;
    return value;
  }

  formElem.addEventListener('submit', onSubmit);

  function onSubmit(e) {
    e.preventDefault();
    const value = getInputValue();
    fetchAndRenderPhotos(value);
  }
};
