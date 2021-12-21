import React from 'react';

import s from './Video.module.scss';
import video from '../../video/vd.mp4';

// const video = 'https://www.youtube.com/watch?v=mHBTY_zs6Po';
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
