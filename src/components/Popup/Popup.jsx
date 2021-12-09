import React from 'react';

import s from './Popup.module.scss';

function Popup(props) {
  // const handleKeyDown = (e) => {
  //   if (e.code === 'Escape') {
  //     this.props.onClose();
  //   }
  // };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  return (
    <div className={s.popup}>
      <div className={s.popupInner} onClick={handleBackdropClick}>
        <h3>My Popup</h3>
      </div>
    </div>
  );
}

export default Popup;
