import React from 'react';
import { ReactComponent as MoreText } from '../../icons/on.svg';
import { ReactComponent as SmallText } from '../../icons/off.svg';
import { ReactComponent as Location } from '../../icons/location.svg';

import s from './Description.module.scss';

const Description = ({ street, isReadMore, onClick, description }) => {
  const smallDescription = description.slice(0, 232).concat('...');

  return (
    <section className={s.container}>
      <div>
        {/* title block */}
        <div className={s.locationContainer}>
          <Location className={s.location} />
          <h2 className={s.title}>{street}</h2>
        </div>
        {/* text block */}
        <div>
          <p className={s.desc}>
            {(isReadMore && smallDescription) || description}
          </p>
          {/* button open more text*/}
          <div onClick={onClick}>
            {isReadMore ? (
              <MoreText className={s.link} />
            ) : (
              <SmallText className={s.activeLink} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
