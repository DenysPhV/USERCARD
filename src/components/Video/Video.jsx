import React from 'react';
import video from '../../video/vd.mp4';

import s from './Video.module.scss';
function Video() {
  return (
    <div className={s.videoContainer}>
      <video autoPlay loop muted className={s.videoFrame}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
