import {BASE_URL, API_KEY} from '../constants.js'

export const fetchGetPhotos = async (value) => {
    const PARAMS = new URLSearchParams({
      key: API_KEY,
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      lang: 'en',
      safesearch: true,
      per_page: 9,
    });
    const url = `${BASE_URL}/?${PARAMS}`;
    try {
      const response = await fetch(url, { method: 'GET' });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };
