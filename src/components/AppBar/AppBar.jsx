import IconButton from '../IconButton/IconButton';
import Description from '../Description/Description';

import s from './AppBar.module.scss';

import { ReactComponent as ArrowFree } from '../../icons/ArrowFree.svg';
function AppBar() {
  return (
    <section>
      <Description />
      <IconButton>
        <ArrowFree className={s.arrow} />
        free
      </IconButton>
    </section>
  );
}
export default AppBar;
