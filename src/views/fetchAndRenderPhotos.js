import { renderPhoto } from './renderWorkOfArtView.js';
import { fetchGetPhotos } from './getDataView.js';

export const fetchAndRenderPhotos = async (value) => {
  const photoDiv = document.createElement('div');
  photoDiv.classList.add('photoDiv');
  const photoUl = document.createElement('ul')
  photoUl.classList.add('photoUl')
  document.body.appendChild(photoUl);

  try {
    const data = await fetchGetPhotos(value);
    const photoList = renderPhoto(data.hits);
    photoUl.innerHTML = photoList;
  } catch (error) {
    console.error('Error fetching and rendering photos:', error);
  }
};
