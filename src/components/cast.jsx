import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPhotos } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const url = `movie/${movieId}/credits`;
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (cast.length === 0) {
      async function fetchData() {
        const responce = await fetchPhotos(url, {});
        setCast([...responce.cast]);
      }
      fetchData();
    }
  }, [url, cast]);

  return (
    <ul>
      {cast.length > 0 &&
        cast.map(actor => {
          return (
            <li key={actor.id} style={{ display: 'flex' }}>
              <img
                style={{ width: '120px', margin: '5px' }}
                src={
                  actor.profile_path &&
                  `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                }
                alt={actor.name}
              />
              <div>
                <h4>{actor.name}</h4>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
