import { NavLink } from 'react-router-dom';
import s from '../FrontDeskBtn/FrontDeskBtn.module.scss';

function FrontDeskBtn() {
  return (
    <>
      {
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
        </nav>
      }
    </>
  );
}

export default FrontDeskBtn;
