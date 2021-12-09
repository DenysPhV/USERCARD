import { useState } from 'react';

import IconButton from '../IconButton/IconButton';
import Description from '../Description/Description';
import Popup from 'components/Popup';

import s from './UserCard.module.scss';

import { ReactComponent as ArrowFree } from '../../icons/ArrowFree.svg';

function UserCard() {
  const [showPopup, setShowPopup] = useState(false);

  const toggleModal = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section className={s.sectionCard}>
      <Description />
      <IconButton onClick={toggleModal}>
        <ArrowFree className={s.arrow} />
        free
      </IconButton>

      {showPopup && <Popup onClose={toggleModal} />}
    </section>
  );
}
export default UserCard;
