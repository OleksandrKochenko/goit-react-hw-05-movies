import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchSerchQuery } from 'services/api';

const SearchList = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const responce = await fetchSerchQuery(query);
      if (responce.results.length === 0) {
        alert('There is no movies for this query');
        return;
      } else {
        setMovies(() => {
          return [...responce.results];
        });
      }
    }
    fetchData();
  }, [query]);

  return (
    <>
      <p style={{ margin: '0 10px' }}>Search list of "{query}"</p>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id} id={movie.id}>
                <Link to={`${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SearchList;
