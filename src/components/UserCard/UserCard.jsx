import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Container from 'components/Container';
import FreeButton from '../FreeButton/FreeButton';
import Description from '../Description/Description';
import FrontDeskBtn from '../FrontDeskBtn/FrontDeskBtn';
import HotelIcon from '../HotelIcon/HotelIcon';
import Popup from 'components/Popup';
import Video from '../Video/Video';
import Gallery from '../Gallery/Gallery';

import { ReactComponent as ArrowFree } from '../../icons/ArrowFree.svg';
import { ReactComponent as Hotel } from '../../icons/hotel.svg';

import { getCards } from '../../redux/userCard/userCard-selectors';
import cardActions from '../../redux/userCard/userCard-actions';
import s from './UserCard.module.scss';
import btnStyle from '../FreeButton/FreeButton.module.scss';

function UserCard() {
  const [showPopup, setShowPopup] = useState(false);

  const cards = useSelector(getCards);
  const dispatch = useDispatch();

  // toggle popup
  const onTogglePopup = (id) => {
    setShowPopup(!showPopup);
    dispatch(cardActions.togglePopup(id));
  };

  return (
    <Container>
      <ul className={s.list}>
        {cards.map(
          ({
            id,
            completed,
            showPopup,
            title,
            city,
            place,
            street,
            priceBefore,
            priceAfter,
            areaApartment,
            feedback,
            status,
            url,
            urlImageSecond,
            rating,
            description,
            videoLink,
          }) => (
            <li key={id}>
              <section className={s.sectionCard}>
                <header className={s.header}>
                  <h1 className={s.title}>
                    {city} <span className={s.titlePiece}>{place}</span>
                  </h1>
                  <div className={s.hotelContainer}>
                    <HotelIcon className={s.iconHotel}>
                      <Hotel />
                      <span className={s.status}>{status}</span>
                    </HotelIcon>
                  </div>
                  <h2 className={s.hotelName}>{title}</h2>
                </header>

                <main className={s.main}>
                  {/* pictures hotels */}
                  <Gallery
                    title={title}
                    isShowText={completed}
                    url={url}
                    rating={rating}
                    urlImageSecond={urlImageSecond}
                  />
                  {/* text about hotel */}
                  <Description
                    description={description}
                    street={street}
                    id={id}
                    // onToggleElement={onToggleElement}
                  />
                  {/* right navbar  */}
                  <div className={s.serveBar}>
                    <Video src={Video} videoLink={videoLink} />
                    {completed && <FrontDeskBtn />}
                  </div>
                </main>

                <footer className={s.footerCard}>
                  {/* the button link on feedback  */}
                  <NavLink to="/feedback" className={s.button}>
                    Отзывы {feedback}
                  </NavLink>

                  <FreeButton
                    onClick={() => onTogglePopup(id)}
                    className={
                      (!showPopup && btnStyle.freeButton) ||
                      btnStyle.freeButtonActive
                    }
                  >
                    <ArrowFree className={s.arrow} />
                    Free
                  </FreeButton>
                  {/* popup free to cancel reservation  */}
                  {showPopup && <Popup showPopup={showPopup} />}
                  <p className={s.areaApartment}>{areaApartment} м.кв.</p>
                  <p
                    className={s.price}
                  >{`Цена за ночь ${priceBefore} UAH - ${priceAfter} UAH`}</p>
                </footer>
              </section>
            </li>
          ),
        )}
      </ul>
    </Container>
  );
}
export default UserCard;
