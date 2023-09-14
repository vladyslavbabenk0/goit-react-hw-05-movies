import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'services/api';
import Loader from 'components/Loader/Loader';
import style from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviewsList = async () => {
      try {
        setError(null);
        setLoading(true);
        const data = await fetchReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviewsList();
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
