import React from 'react';

import FreeButton from '../FreeButton/FreeButton';
import { ReactComponent as ArrowFree } from '../../icons/ArrowFree.svg';

import s from './Popup.module.scss';

function Popup() {
  return (
    <div className={s.popup}>
      <div className={s.popupInner}>
        <p className={s.title}>Отмена бронирования бесплатно</p>
        <FreeButton className={s.freeButtonActive}>
          <ArrowFree className={s.arrow} />
          Free
        </FreeButton>
        <div className={s.arrowDown}></div>
      </div>
    </div>
  );
}

export default Popup;
