import s from './Gallery.module.scss';

function Gallery({ url, title, isReadMore, rating }) {
  return (
    <>
      <ul className={s.imageList}>
        <li className={s.imageItem}>
          <img src={url} alt={title} className={s.image} />
          <div className={s.rank}>{rating}</div>
        </li>
        {!isReadMore && (
          <li className={s.imageItem}>
            <img src={url} alt={title} className={s.image} />
          </li>
        )}
      </ul>
    </>
  );
}

Gallery.defaultProps = {
  rating: '4,3',
};

export default Gallery;
