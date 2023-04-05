import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPhotos } from 'services/api';

const TrendingList = () => {
  const [movies, setMovies] = useState([]);

  const url = 'trending/movie/day';

  useEffect(() => {
    async function fetchData() {
      const responce = await fetchPhotos(url, {});
      setMovies(() => {
        return [...responce.results];
      });
    }
    fetchData();
  }, []);

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id} id={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TrendingList;
