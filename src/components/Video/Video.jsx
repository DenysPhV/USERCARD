import React, { useRef } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Images from 'components/Images';
import { ReactComponent as LinkArrow } from '../../icons/linkArrow.svg';

import s from './Video.module.scss';
//https://www.youtube.com/embed/4JiF7quBZ3c?autoplay=1&cc_load_policy=3&end=10&fs=0&loop=1&modestbranding=1&playsinline=1&start=5&playlist=eoGdSempEuQ
function Video({ videoLink }) {
  const inputEl = useRef(null);

  // const onButtonClick = () => {
  //   // `current` указывает на смонтированный элемент `input`
  //   inputEl.current.focus();
  // };

  // const handleHover = () => {
  //   console.log('this is hover');
  // };

  // useEffect(() => {
  //   inputEl.current.addEventListener('hover', handleHover);
  // }, []);

  return (
    <>
      <div className={s.videoContainer}>
        <NavLink to="/video" className={s.link} ref={inputEl}>
          <LinkArrow className={s.linkArrow} />
        </NavLink>
        <Images />

        <iframe
          className={s.videoFrame}
          ref={inputEl}
          id="ytplayer"
          type="text/html"
          src={videoLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>

      <div id="player"></div>
    </>
  );
}

export default Video;

// заглушка https://i.ibb.co/nfGwMww/Rectangle-96.jpg
