import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9a450fbd652c62e887bc78d79e7a75f2';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchPhotos = async (addUrl, params) => {
  const config = {
    params: {
      query: params.query,
      language: params.language,
      include_adult: params.include_adult,
    },
  };
  const response = await axios.get(addUrl, config);
  return response.data;
};
