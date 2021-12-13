import { NavLink } from 'react-router-dom';
import s from '../FrontDeskBtn/FrontDeskBtn.module.scss';

function FrontDeskBtn({ isReadMore, onClick }) {
  return (
    <div onClick={onClick}>
      {!isReadMore && (
        <nav className={s.list}>
          <NavLink to="/price" className={s.button}>
            Узнать цены
          </NavLink>
          <NavLink to="/reserve" className={s.button}>
            Забронировать
          </NavLink>
          <NavLink to="/more-about" className={s.button}>
            Детальнее
          </NavLink>
          {/* <li className={s.button}>Узнать цены</li>
          <li className={s.button}>Забронировать</li>
          <li className={s.button}>Детальнее</li> */}
        </nav>
      )}
    </div>
  );
}

export default FrontDeskBtn;
