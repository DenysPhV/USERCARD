import React from 'react';
import PropTypes from 'prop-types';

// import s from './HotelIcon.module.scss';

const HotelIcon = ({ children, ...allyProps }) => (
  <div {...allyProps}>{children}</div>
);

HotelIcon.defaultProps = {
  children: null,
};

HotelIcon.propsTypes = {
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default HotelIcon;
