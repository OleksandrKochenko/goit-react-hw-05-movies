import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPhotos } from 'services/api';

const SearchList = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const url = 'search/movie';

  useEffect(() => {
    async function fetchData() {
      const responce = await fetchPhotos(url, { query: query });
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
                <Link to={`${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SearchList;
