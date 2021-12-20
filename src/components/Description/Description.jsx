import React, { useState } from 'react';
import { ReactComponent as MoreText } from '../../icons/on.svg';
import { ReactComponent as SmallText } from '../../icons/off.svg';
import { ReactComponent as Location } from '../../icons/location.svg';

import s from './Description.module.scss';

const description =
  'Па́бло Эми́лио Эскоба́р Гави́рия (исп. Pablo Emilio Escobar Gaviria; 1 декабря 1949 — 2 декабря 1993) — колумбийский наркобарон и террорист.По сей день является одним из самых известных, жестоких и богатых преступников в истории. По некоторым оценкам, денежное состояние Эскобара составляло около 30 млрд долларов США[1]. Журнал Forbes помещал его в список международных миллиардеров с 1987 по 1993 год[2], а в 1989 году он занял седьмое место в рейтинге журнала[1]. Огромную часть своего времени молодой Пабло проводил в бедных кварталах Медельина, который был настоящим рассадником преступности. Эскобар сталкрасть надгробия с местного кладбища и, стирая надписи, продавать их панамским перекупщикам. Затем он продавал сигареты и марихуану, подделывал лотерейные билеты. Вскоре он создал небольшую банду и начал промышлять угоном дорогих автомобилей для продажи на запчасти. Затем ему пришла мысль заниматься рэкетом[5]. В 1971 году люди Пабло похитили богатого колумбийского промышленника Диего Эчаваррию, который после длительных пыток был убит. Преступники пытались получить выкуп, но потерпели неудачу и, задушив свою жертву, выбросили труп на свалку. Спустя год 22-летний Эскобар был самым известным преступным авторитетом Медельина. Его банда продолжала расти, и Пабло решил начать новый криминальный бизнес, с которым будет связана вся его последующая жизнь.';

const Description = ({ isReadMore, onClick }) => {
  const [allText] = useState(description);

  const title = 'ул. Независимости, д. 19';
  const smallDescription = description.slice(0, 232).concat('...');

  return (
    <section className={s.container}>
      <div>
        {/* title block */}
        <div className={s.locationContainer}>
          <Location className={s.location} />
          <h2 className={s.title}>{title}</h2>
        </div>
        {/* text block */}
        <div>
          <p className={s.desc}>
            {(isReadMore && smallDescription) || allText}
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
