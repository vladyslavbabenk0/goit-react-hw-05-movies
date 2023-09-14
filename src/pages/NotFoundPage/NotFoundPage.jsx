import { Link } from 'react-router-dom';
import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <h1>
        Page not found. Perhaps you meant the{' '}
        <Link className={style.home} to="/">
          home page
        </Link>
        ?
      </h1>
    </div>
  );
};

export default NotFoundPage;
