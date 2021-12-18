import React, { useState } from 'react';
import { ReactComponent as MoreText } from '../../icons/on.svg';
import { ReactComponent as SmallText } from '../../icons/off.svg';

import s from './Description.module.scss';

const title = 'ул. Независимости, д. 19';
const description =
  'Огромную часть своего времени молодой Пабло проводил в бедных кварталах Медельина, который был настоящим рассадником преступности. Эскобар сталкрасть надгробия с местного кладбища и, стирая надписи, продавать их панамским перекупщикам. Затем он продавал сигареты и марихуану, подделывал лотерейные билеты. Вскоре он создал небольшую банду и начал промышлять угоном дорогих автомобилей для продажи на запчасти. Затем ему пришла мысль заниматься рэкетом[5]. В 1971 году люди Пабло похитили богатого колумбийского промышленника Диего Эчаваррию, который после длительных пыток был убит. Преступники пытались получить выкуп, но потерпели неудачу и, задушив свою жертву, выбросили труп на свалку.';

const smallDescription =
  'Па́бло Эми́лио Эскоба́р Гави́рия (исп. Pablo Emilio Escobar Gaviria; 1 декабря 1949 — 2 декабря 1993) — колумбийский наркобарон и террорист. Эскобара называют «Королем кокаина», поскольку он был лидером Медельинского картеля контро...';

const Description = ({ isReadMore, onClick }) => {
  const [smallText] = useState(smallDescription);
  const [allText] = useState(description);

  return (
    <section className={s.container}>
      <div>
        <h2 className={s.title}>{title}</h2>
        {/* text block */}
        <div>
          <p className={s.desc}>{(isReadMore && smallText) || allText}</p>
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
