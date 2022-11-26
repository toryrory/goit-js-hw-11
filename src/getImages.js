import axios from 'axios';

const API_KEY = '31526649-6c5c857b45ffe65514d171168';
axios.defaults.baseURL = 'https://pixabay.com/api/';

async function getImages(query, page, perPage) {
    const response = await axios.get(
      `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
  return response;
}
export { getImages };