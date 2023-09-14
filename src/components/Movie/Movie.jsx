import { Outlet, Link, useLocation } from 'react-router-dom';
import style from './Movie.module.css';
import { StyledNavLink } from './Movie.styled';
import PropTypes from 'prop-types';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER = 'https://via.placeholder.com/182x273';

const Movie = ({ img, title, genres, overview, rating }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <>
      <div className={style.container}>
        <div className={style.linkContainer}>
          <Link className={style.back} to={backLinkHref}>
            Go back
          </Link>
        </div>
        <div className={style.generalContainer}>
          <img
            src={`${
              img ? BASE_POSTER_URL + img : PLACEHOLDER + '?text=' + title
            }`}
            alt={title}
            width="150"
          />
          <div className={style.descriptionContainer}>
            <h3>{title}</h3>
            <p className={style.rating}>Rating: {Math.round(rating)}</p>
            {genres && genres.length > 0 ? (
              <div>
                <h4 className={style.genres}>Genres</h4>
                <ul className={style.listGenres}>
                  {genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No genres available</p>
            )}
            <h4 className={style.overview}>Overview</h4>
            <p>{overview}</p>
          </div>
        </div>
        <div>
          <h2>Additional information</h2>
          <ul className={style.infoList}>
            <li>
              <StyledNavLink to="cast" state={location.state}>
                Cast
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="reviews" state={location.state}>
                Reviews
              </StyledNavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

Movie.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  overview: PropTypes.string,
  rating: PropTypes.number,
};

export default Movie;
