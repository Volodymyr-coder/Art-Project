import { renderPhoto } from './renderWorkOfArtView.js';
import { fetchGetPhotos } from './getDataView.js';

export const fetchAndRenderPhotos = async (value) => {
  const loader = document.createElement('div');
  loader.classList.add('centered', 'loader', 'none');
  document.body.appendChild(loader);

  const photoDiv = document.createElement('div');
  photoDiv.classList.add('photoDiv');
  document.body.appendChild(photoDiv);

  let photoUl = document.querySelector('.photoUl');

  function renderError(error) {
    const h2 = document.createElement('h2');
    h2.classList.add('h2');
    h2.textContent = `Error: ${error.message}`;
    photoUl.appendChild(h2);
  }

  if (!photoUl) {
    photoUl = document.createElement('ul');
    photoUl.classList.add('photoUl');
    photoDiv.appendChild(photoUl);
  }

  photoUl.innerHTML = '';
  loader.classList.remove('none');
  loader.classList.add('block');

  try {
    const data = await fetchGetPhotos(value);
    const photoList = renderPhoto(data.hits);
    photoUl.innerHTML = photoList;
  } catch (error) {
    console.error('Error fetching photos:', error);
    renderError(error);
  } finally {
    loader.classList.remove('block');
    loader.classList.add('none');
  }
};
