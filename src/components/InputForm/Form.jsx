import { useState, useEffect } from 'react';
import style from './Form.module.css';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');
  const location = useLocation();
  // useEffect(() => {
  //   const storedQuery = localStorage.getItem('storedQuery');

  //   if (storedQuery) {
  //     setQuery(storedQuery);
  //   }
  // }, []);

  useEffect(() => {
    
    const isMoviePage = location.pathname.startsWith('/movies/'); 

    if (isMoviePage) {

      setQuery('');
    }
  }, [location.pathname]);

  const handleInput = (evt) => {
    const inputValue = evt.target.value;
    setQuery(inputValue);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!query) {
      Notiflix.Notify.info('Please enter your request');
    } else {
      setSearchParams({ query });
      localStorage.setItem('storedQuery', query);
    }
  };

  return (
    <form className={style.inputform} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="text"
        placeholder="Enter title"
        value={query}
        autoFocus
        onChange={handleInput}
        autoComplete="off"
      />

      <button className={style.button} type="submit">
        Search
      </button>
    </form>
  );
};

Form.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};

export default Form;
