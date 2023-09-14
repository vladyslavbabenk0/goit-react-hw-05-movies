import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'services/api';
import style from './Reviews.module.css';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);
        const reviewsData = await fetchReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [movieId]);
  
  return (
    <div className={style.container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error !== null ? (
            <p>Something went wrong. Error: {error}</p>
          ) : reviews.length === 0 ? (
            <p>No results</p>
          ) : (
            <ul className={style.list}>
              {reviews.length !== 0 &&
                reviews.map(item => {
                  return (
                    <li className={style.listItem} key={item.id}>
                      <p>Author: {item.author}</p>
                      <p>{item.content}</p>
                    </li>
                  );
                })}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Reviews;
