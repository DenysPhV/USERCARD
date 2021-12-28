import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as LinkArrow } from '../../icons/linkArrow.svg';
import s from './Video.module.scss';
// import video from '../../video/vd.mp4';
// import video from '../../video/panasonic_hokkaido_and_tokyo_uhd.mkv';

function Video({ videoLink }) {
  return (
    <div className={s.videoContainer}>
      <NavLink to="/video" className={s.link}>
        <LinkArrow className={s.linkArrow} />
      </NavLink>
      <iframe
        className={s.videoFrame}
        src={videoLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      {/* <video autoPlay loop muted className={s.videoFrame}>
        <source src={video} />
      </video> */}
    </div>
  );
}

Video.defaultProps = {
  videoLink:
    'https://www.youtube.com/embed/PhQyTB2_hLA?autoplay=1&loop=1&start=3&end=7',
};

export default Video;
