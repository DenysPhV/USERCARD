import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as LinkArrow } from '../../icons/linkArrow.svg';
import s from './Video.module.scss';

function Video({ videoLink }) {
  return (
    <>
      <div className={s.videoContainer}>
        <NavLink to="/video" className={s.link}>
          <LinkArrow className={s.linkArrow} />
        </NavLink>
        <iframe
          id="ytplayer"
          type="text/html"
          className={s.videoFrame}
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
