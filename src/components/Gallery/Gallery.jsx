import s from './Gallery.module.scss';
import Image from 'components/Images/Images';

function Gallery({ url, urlImageSecond, title, isShowText, rating }) {
  return (
    <>
      <ul className={s.imageList}>
        <li className={s.imageItem}>
          <Image src={url} alt={title} className={s.image} />
          <div className={s.rank}>{rating}</div>
        </li>
        {isShowText && (
          <li className={s.imageItem}>
            <Image src={urlImageSecond} alt={title} className={s.image} />
          </li>
        )}
      </ul>
    </>
  );
}

export default Gallery;
