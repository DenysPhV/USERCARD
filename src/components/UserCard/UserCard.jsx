import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import FreeButton from '../FreeButton/FreeButton';
import Description from '../Description/Description';
import FrontDeskBtn from '../FrontDeskBtn/FrontDeskBtn';
import HotelIcon from '../HotelIcon/HotelIcon';
import Popup from 'components/Popup';
import Video from '../Video/Video';

import s from './UserCard.module.scss';
import btnStyle from '../FreeButton/FreeButton.module.scss';

import { ReactComponent as ArrowFree } from '../../icons/ArrowFree.svg';
import { ReactComponent as Hotel } from '../../icons/hotel.svg';

import defaultImage from '../../images/default.jpg';

function UserCard({
  url,
  title,
  priceBefore,
  priceAfter,
  areaApartment,
  feedback,
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [isReadMore, setIsReadMore] = useState(true);
  const [style, setStyle] = useState(btnStyle.freeButton);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);

    if (!showPopup) {
      setStyle(btnStyle.freeButtonActive);
    } else {
      setStyle(btnStyle.freeButton);
    }
    return;
  };

  return (
    <section className={s.sectionCard}>
      <header className={s.header}>
        <h1 className={s.title}>
          Киев <span className={s.titlePiece}>Левый берег</span>
        </h1>
        <div className={s.hotelContainer}>
          <HotelIcon className={s.iconHotel}>
            <Hotel />
            <span className={s.status}>Отель</span>
          </HotelIcon>
        </div>
        <h2 className={s.hotelName}>{title}</h2>
      </header>
      {/* Тело карты пользователя */}
      <main className={s.main}>
        <ul className={s.imageList}>
          <li className={s.imageItem}>
            <img src={url} alt={title} className={s.image} />
          </li>
          {!isReadMore && (
            <li className={s.imageItem}>
              <img src={url} alt={title} className={s.image} />
            </li>
          )}
        </ul>

        <Description isReadMore={isReadMore} onClick={toggleReadMore} />
        <div className={s.serveBar}>
          <Video src={Video} />
          <FrontDeskBtn isReadMore={isReadMore} onClick={toggleReadMore} />
        </div>
      </main>
      {/* футер карты пользователя  */}
      <footer className={s.footerCard}>
        {/* the button link on feedback  */}
        <NavLink to="/feedback" className={s.button}>
          Отзывы {feedback}
        </NavLink>

        <FreeButton onClick={togglePopup} className={style}>
          <ArrowFree className={s.arrow} />
          Free
        </FreeButton>

        {showPopup && <Popup onClose={togglePopup} />}

        <p className={s.areaApartment}>{areaApartment} м.кв.</p>
        <p
          className={s.price}
        >{`Цена за ночь ${priceBefore} UAH - ${priceAfter} UAH`}</p>
      </footer>
    </section>
  );
}

UserCard.defaultProps = {
  url: defaultImage,
  title: 'Hilton hotel',
  priceBefore: 700,
  priceAfter: 1900,
  areaApartment: 77,
  feedback: 568,
};

export default UserCard;
