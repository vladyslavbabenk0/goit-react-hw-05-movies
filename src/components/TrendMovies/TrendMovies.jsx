import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TrendMovies = ({ id, title }) => {
  const location = useLocation();
  return (
    <li id={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  );
};

TrendMovies.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default TrendMovies;
