import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendings } from 'services/api';

const TrendingList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const responce = await fetchTrendings();
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
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TrendingList;
