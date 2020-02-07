/* eslint-disable max-len */
import React from 'react';

import HoverIcon from './HoverIcon';

const CampaignIcon: HoverIcon = ({ isHovered }) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M22 12.5L3 3L5.41818 11.8695L17.8114 12.5086L5.40091 13.1823L3 22L22 12.5Z' fill={isHovered ? '#2B76FB' : '#A5B1C3'} />
  </svg>
);

export default CampaignIcon;
