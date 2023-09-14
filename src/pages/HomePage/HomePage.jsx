import React, { useEffect, useState } from 'react';
import { fetchTrends } from '../../services/api';
import style from './HomePage.module.css';
import Loader from '../../components/Loader';

import TrendMovies from 'components/TrendMovies';

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendsList = async () => {
      try {
        setError(null);
        setLoading(true);
        const trendsList = await fetchTrends();
        setTrends(trendsList);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendsList();
  }, []);

  return (
    <div className={style.container}>
      <h1>Trending today</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error !== null ? (
            <p>Something went wrong. Error: {error}</p>
          ) : (
            <ul className={style.trendsList}>
              {trends.map(movie => {
                return (
                  <TrendMovies
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                  />
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
