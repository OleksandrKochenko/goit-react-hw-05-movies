import { useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPhotos } from 'services/api';

const StyledLink = styled(Link)`
  color: #212121;
  &:focus {
    color: orangered;
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const url = `movie/${movieId}`;
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  const [{ title, img, year, score, overview, genres }, setState] = useState({
    title: '',
    img: '',
    year: '',
    score: '',
    overview: '',
    genres: [],
  });

  useEffect(() => {
    async function fetchData() {
      const responce = await fetchPhotos(url, {});
      setState({
        title: responce.title,
        img: `https://image.tmdb.org/t/p/w300/${responce.poster_path}`,
        year: responce.release_date.slice(0, 4),
        score: `${Math.round(responce.vote_average * 10)}%`,
        overview: responce.overview,
        genres: responce.genres.map(genre => {
          return genre.name;
        }),
      });
    }
    fetchData();
  }, [url]);

  return (
    <>
      <Link to={backLink.current} style={{ margin: '0 10px' }}>
        {'<-'} Go Back
      </Link>
      <div
        style={{
          display: 'flex',
        }}
      >
        <img
          style={{ margin: '0 10px' }}
          src={`${img}`}
          alt={`${title} poster`}
        />
        <div>
          <h2>{`${title} (${year})`} </h2>
          <p>User Score: {score}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.join(', ')}</p>
        </div>
      </div>
      <hr />
      <div>
        <p style={{ margin: '0 10px' }}>Additional information</p>
        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </>
  );
};

export default MovieDetails;
