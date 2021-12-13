import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import FreeButton from '../FreeButton/FreeButton';
import Description from '../Description/Description';
import FrontDeskBtn from '../FrontDeskBtn/FrontDeskBtn';
import Popup from 'components/Popup';

import s from './UserCard.module.scss';
import btnStyle from '../FreeButton/FreeButton.module.scss';

import { ReactComponent as ArrowFree } from '../../icons/ArrowFree.svg';

function UserCard() {
  const [showPopup, setShowPopup] = useState(false);
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section className={s.sectionCard}>
      <header>
        <h1>Киев Левый берег</h1>
      </header>
      {/* Тело карты пользователя */}
      <main className={s.main}>
        <Description isReadMore={isReadMore} onClick={toggleReadMore} />
        <FrontDeskBtn isReadMore={isReadMore} onClick={toggleReadMore} />
      </main>
      {/* футер карты пользователя  */}
      <footer className={s.footerCard}>
        <NavLink to="/feedback" className={s.button}>{`Отзывы ${568}`}</NavLink>

        <FreeButton onClick={togglePopup} className={btnStyle.freeButton}>
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
