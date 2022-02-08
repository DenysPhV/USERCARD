import React from 'react';
import classNames from 'classnames';

import foto1 from '../../images/interier/c1/2_11.jpg';

const Image = ({ src, alt, className, width, height, ...attrs }) => {
  if (!src) {
    src = `https://via.placeholder.com/${width}x${height}`;
  }

  const classes = classNames(className);

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      width={width}
      height={height}
      {...attrs}
    />
  );
};

Image.defaultProps = {
  src: '',
  alt: 'image name',
  className: '',
  width: 100,
  height: 100,
};
export default Image;
