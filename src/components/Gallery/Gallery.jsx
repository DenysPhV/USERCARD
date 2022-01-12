// import defaultImage from '../../images/default.jpg';
// import secondImage from '../../images/image-second.jpg';
import s from './Gallery.module.scss';

function Gallery({ url, urlImageSecond, title, isShowText, rating }) {
  return (
    <>
      <ul className={s.imageList}>
        <li className={s.imageItem}>
          <img src={url} alt={title} className={s.image} />
          <div className={s.rank}>{rating}</div>
        </li>
        {isShowText && (
          <li className={s.imageItem}>
            <img src={urlImageSecond} alt={title} className={s.image} />
          </li>
        )}
      </ul>
    </>
  );
}

// Gallery.defaultProps = {
//   url: defaultImage,
//   urlImageSecond: secondImage,
//   rating: '4,3',
// };

export default Gallery;
