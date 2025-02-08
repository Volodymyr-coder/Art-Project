import { START_DIVE_IN_ART } from '../constants.js';
import { USER_NAME_INPUT_ID } from '../constants.js';
/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1 class = "welcome-text">Welcome to the WORLD of ART PHOTOS</h1>
    <label for="${USER_NAME_INPUT_ID}" class="user-name"> User Name </label>
    <input type="text" id ="${USER_NAME_INPUT_ID}">
    <button id="${START_DIVE_IN_ART}">WORLD OF PHOTOS</button>
  `;
  return element;
};
