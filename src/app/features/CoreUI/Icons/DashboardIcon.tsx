/* eslint-disable max-len */
import React from 'react';

import HoverIcon from './HoverIcon';

const DashboardIcon: HoverIcon = ({ isHovered }) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M3 9H11.5V3H3V9ZM3 21H11.5V10H3V21ZM12.5 3V14H21V3H12.5ZM12.5 21H21V15H12.5V21Z' fill={isHovered ? 'url(#paint0_linear)' : '#8191A6'} />
    <defs>
      <linearGradient id='paint0_linear' x1='12' y1='3' x2='13.2365' y2='26.5083' gradientUnits='userSpaceOnUse'>
        <stop stopColor='#148FFD' />
        <stop offset='1' stopColor='#2B76FB' />
      </linearGradient>
    </defs>
  </svg>
);

export default DashboardIcon;
