
import {BASE_URL, API_KEY} from '../constants.js'

export const  fetchGetPhotos = async (value) => {
    const PARAMS = new URLSearchParams({
        key: API_KEY,
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        lang: 'en',
        safesearch: true,
      });
    const url = `${BASE_URL}/?${PARAMS}`;
    try {
        const response = await fetch(url, { method: 'GET',});
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}


export const renderPhoto = function (data) {
    return data
    .map(
      ({ webformatURL, largeImageURL }) => {
        return `<li class="item">
     <a href='${largeImageURL}'><img class="image" src="${webformatURL}" alt="Art" /></a>
             </li>`;
      }
    )
    .join('');



  }


export const fetchAndRenderPhotos = async (value) => {
    const photoDiv = document.createElement('div')
    photoDiv.classList.add('photoDiv')
    document.body.appendChild(photoDiv)

    try {
        const data = await fetchGetPhotos(value);
        const photoList = renderPhoto(data.hits);
 photoDiv.innerHTML = photoList;    
} catch (error) {
        console.error('Error fetching and rendering photos:', error);
    }
};

