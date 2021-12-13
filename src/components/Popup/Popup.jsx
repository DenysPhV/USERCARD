import React from 'react';

import s from './Popup.module.scss';

function Popup() {
  // const handleKeyDown = (e) => {
  //   if (e.code === 'Escape') {
  //     this.props.onClose();
  //   }
  // };

  // const handleBackdropClick = (e) => {
  //   if (e.currentTarget === e.target) {
  //     this.props.onClose();
  //   }
  // };

  return (
    <div className={s.popup}>
      <div className={s.popupInner}>
        <p className={s.title}>My Popup</p>
      </div>
    </div>
  );
}

export default Popup;
