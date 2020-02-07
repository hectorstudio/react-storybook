/* eslint-disable max-len */
import React from 'react';

import HoverIcon from './HoverIcon';

const BackButtonIcon: HoverIcon = ({ isHovered }) => (
  <svg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='18' cy='18' r='18' fill={isHovered ? '#DFE6F1' : '#F3F7FB'} />
    <path d='M16.828 18L21.778 22.95L20.364 24.364L14 18L20.364 11.636L21.778 13.05L16.828 18Z' fill='#6F88A2' />
  </svg>
);

export default BackButtonIcon;
