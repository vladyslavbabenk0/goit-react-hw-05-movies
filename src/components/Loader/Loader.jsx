import { ProgressBar } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => {
  return (
      <div className={style.loaderContainer}>
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor = '#172CAF'
          barColor = '#51E5FF'
        />
      </div>
  );
};

export default Loader;
