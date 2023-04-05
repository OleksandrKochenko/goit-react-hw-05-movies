import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import MovieDetails from 'pages/movie-details';
import Layout from './Layout';
import Cast from './cast';
import Reviews from './reviews';
import Movies from 'pages/movie-search';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
