import { BASE_URL, API_KEY } from '../constants.js';

export const fetchGetPhotos = async (value) => {
  const PARAMS = new URLSearchParams({
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    lang: 'en',
    safesearch: true,
    page: 1,
    per_page: 15,
  });
  const url = `${BASE_URL}/?${PARAMS}`;

  try {
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.hits || data.hits.length === 0) {
      throw new Error('No results found for your query.');
    }

    return data;
  } catch (error) {
    throw error;
  }
};
