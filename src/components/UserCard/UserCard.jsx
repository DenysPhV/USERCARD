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

import '../../images/default.jpg';

function UserCard() {
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
        <p className={s.hotelName}>Hilton hotel</p>
      </header>
      {/* Тело карты пользователя */}
      <main className={s.main}>
        <img src="default.jpg" alt="" width={100} height={100} />

        <Description isReadMore={isReadMore} onClick={toggleReadMore} />
        <div>
          <Video src={Video} />
          <FrontDeskBtn isReadMore={isReadMore} onClick={toggleReadMore} />
        </div>
      </main>
      {/* футер карты пользователя  */}
      <footer className={s.footerCard}>
        <NavLink to="/feedback" className={s.button}>{`Отзывы ${568}`}</NavLink>

        <FreeButton onClick={togglePopup} className={style}>
          <ArrowFree className={s.arrow} />
          free
        </FreeButton>

        {showPopup && <Popup onClose={togglePopup} />}

        <p className={s.price}>{`Цена за ночь ${700} UAH - ${1900} UAH`}</p>
      </footer>
    </section>
  );
}
export default UserCard;
