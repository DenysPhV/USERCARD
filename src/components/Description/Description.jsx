import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as MoreText } from '../../icons/on.svg';
import { ReactComponent as SmallText } from '../../icons/off.svg';
import { ReactComponent as Location } from '../../icons/location.svg';

import cardActions from '../../redux/userCard/userCard-actions';
import s from './Description.module.scss';

const Description = ({ id, street, description }) => {
  const [isShowText, setIsShowText] = useState(true);
  const dispatch = useDispatch();

  const onToggleElement = (id) => {
    setIsShowText(!isShowText);
    dispatch(cardActions.toggleCompleted(id));
  };

  const descByParagraph = description.a;
  const smallDescription = descByParagraph.slice(0, 232).concat('...');

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
          <div className={s.desc}>
            <p>{(isShowText && smallDescription) || description.a}</p>
            <p>{isShowText || description.b}</p>
          </div>
          {/* button open more text*/}
          <button
            type="button"
            onClick={() => onToggleElement(id)}
            className={s.btn}
          >
            <div>
              {isShowText ? (
                <MoreText className={s.link} />
              ) : (
                <SmallText className={s.activeLink} />
              )}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Description;
