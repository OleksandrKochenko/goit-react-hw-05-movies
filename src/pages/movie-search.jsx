import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchList from 'components/search-list';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(q);

  const handleChange = e => {
    e.target.value === ''
      ? setSearchParams({})
      : setSearchParams({ q: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(q.trim());
  };

  return (
    <>
      <form style={{ margin: '0 10px' }} onSubmit={handleSubmit}>
        <input
          value={q}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
        />
        <button type="submit"> Search </button>
      </form>
      <hr />
      {query !== '' && <SearchList query={query} />}
    </>
  );
};

export default Movies;
