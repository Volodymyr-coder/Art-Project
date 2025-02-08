// import {BASE_URL, API_KEY} from '../constants.js'

// export const  fetchGetPhotos = async (q) => {
//     const PARAMS = new URLSearchParams({
//         key: API_KEY,
//         q,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         lang: 'en',
//         safesearch: true,
//       });
//     const url = `${BASE_URL}/?${PARAMS}`;
//     try {
//         const response = await fetch(url, { method: 'GET',});
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Fetch error:', error);
//         throw error;
//     }
// }

// fetchGetPhotos('cat')



