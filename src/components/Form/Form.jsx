import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import style from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const storedQuery = localStorage.getItem('storedQuery');
    if (storedQuery) {
      setQuery(storedQuery);
    }
  }, []);

  const handleInput = e => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    localStorage.setItem('storedQuery', inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      Notiflix.Notify.info('Please enter your request');
    } else {
      setSearchParams({ query });
    }
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="text"
        placeholder="Enter the movie title"
        value={query}
        onChange={handleInput}
        autoComplete="off"
        autoFocus
      />
      <button className={style.btn} type="submit">
        Search
      </button>
    </form>
  );
};

Form.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};

export default Form;
