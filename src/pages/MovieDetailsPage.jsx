import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';
import Loader from '../components/Loader';
import Movie from '../components/Movie';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setError(null);
        setLoading(true);
        const { genres, id, overview, poster_path, title, vote_average } =
          await fetchMovieDetails(movieId);
        const genresList = genres.map(genre => genre.name);
        setMovieDetails({
          genresList,
          id,
          overview,
          poster_path,
          title,
          vote_average,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error !== null ? (
            <p>Something went wrong. Error: {error}</p>
          ) : (
            <Movie
              id={movieDetails.id}
              img={movieDetails.poster_path}
              title={movieDetails.title}
              genres={movieDetails.genresList}
              overview={movieDetails.overview}
              rating={movieDetails.vote_average}
            />
          )}
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
