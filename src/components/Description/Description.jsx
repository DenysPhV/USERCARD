import { useState } from 'react';

import { ReactComponent as MoreText } from '../../icons/on.svg';
import { ReactComponent as SmallText } from '../../icons/off.svg';

// import { ToggleButton } from './toggleButton';

import s from './Description.module.scss';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <p className={s.desc}>
        {isReadMore ? text.slice(0, 160).concat('...') : text}
      </p>

      <div onClick={toggleReadMore}>
        {isReadMore ? (
          <MoreText className={s.link} />
        ) : (
          <SmallText className={s.activeLink} />
        )}
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ReadMore>
        Огромную часть своего времени молодой Пабло проводил в бедных кварталах
        Медельина, который был настоящим рассадником преступности. Эскобар стал
        красть надгробия с местного кладбища и, стирая надписи, продавать их
        панамским перекупщикам. Затем он продавал сигареты и марихуану,
        подделывал лотерейные билеты. Вскоре он создал небольшую банду и начал
        промышлять угоном дорогих автомобилей для продажи на запчасти. Затем ему
        пришла мысль заниматься рэкетом[5]. В 1971 году люди Пабло похитили
        богатого колумбийского промышленника Диего Эчаваррию, который после
        длительных пыток был убит. Преступники пытались получить выкуп, но
        потерпели неудачу и, задушив свою жертву, выбросили труп на свалку.
      </ReadMore>
    </nav>
  );
};

export default Navigation;
