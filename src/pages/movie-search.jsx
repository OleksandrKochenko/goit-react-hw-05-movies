import { useState } from 'react';
import SearchList from 'components/search-list';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(inputValue.trim());
    setInputValue('');
  };

  return (
    <>
      <form style={{ margin: '0 10px' }} onSubmit={handleSubmit}>
        <input
          value={inputValue}
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
