/* eslint-disable max-len */
import React from 'react';

import HoverIcon from './HoverIcon';

const PopupIcon: HoverIcon = ({ isHovered }) => (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M19.7301 7.27273L10.0301 0L0.330078 7.27273L10.0301 14.5455L19.7301 7.27273ZM11.121 15.9727L10.0301 16.7818L8.93917 15.9727L2.45735 11.1364L0.330078 12.7273L10.0301 20L19.7301 12.7273L17.6028 11.1364L11.121 15.9727Z' fill={isHovered ? '#2B76FB' : '#A5B1C3'} />
  </svg>
);

export default PopupIcon;
