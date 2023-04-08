import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9a450fbd652c62e887bc78d79e7a75f2';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: false,
};

export const fetchTrendings = async () => {
  const endPoint = 'trending/movie/day';
  const response = await axios.get(endPoint);
  return response.data;
};

export const fetchSerchQuery = async query => {
  const endPoint = 'search/movie';
  const config = {
    params: { query: query },
  };
  const response = await axios.get(endPoint, config);
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const endPoint = `movie/${movieId}`;
  const response = await axios.get(endPoint);
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const endPoint = `movie/${movieId}/credits`;
  const response = await axios.get(endPoint);
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const endPoint = `movie/${movieId}/reviews`;
  const response = await axios.get(endPoint);
  return response.data;
};
