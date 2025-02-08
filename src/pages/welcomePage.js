import { USER_INTERFACE_ID, START_DIVE_IN_ART,  USER_NAME_INPUT_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initPagePhoto } from './PagewithPhotos.js';
// import { fetchGetPhotos } from '../views/getData.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_DIVE_IN_ART)
    .addEventListener('click',   startDiveInArt  );
};

const startDiveInArt = () => {
  const UserInputName = document.getElementById(USER_NAME_INPUT_ID);
  const UserName = UserInputName.value ;
  initPagePhoto(UserName);
  
};
