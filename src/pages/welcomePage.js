import { USER_INTERFACE_ID, START_DIVE_IN_ART } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './PagewithWorkOfArt.js';
import { USER_NAME_INPUT_ID } from '../constants.js';
import { quizData } from '../data.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_DIVE_IN_ART)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  const PlayerInputName = document.getElementById(USER_NAME_INPUT_ID);
  const playerName = PlayerInputName.value || 'user';
  quizData.playerName = playerName;
  initQuestionPage();
};
