/* eslint-disable max-len */
import React from 'react';

import HoverIcon from './HoverIcon';

const KeywordsIcon: HoverIcon = ({ isHovered }) => (
  <svg width='18' height='14' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M15.75 7C15.75 6.41984 15.9871 5.86344 16.409 5.4532C16.831 5.04297 17.4033 4.8125 18 4.8125V0H0V4.8125C0.596737 4.8125 1.16903 5.04297 1.59099 5.4532C2.01295 5.86344 2.25 6.41984 2.25 7C2.25 7.58016 2.01295 8.13656 1.59099 8.5468C1.16903 8.95703 0.596737 9.1875 0 9.1875V14H18V9.1875C17.4033 9.1875 16.831 8.95703 16.409 8.5468C15.9871 8.13656 15.75 7.58016 15.75 7Z' fill={isHovered ? '#2B76FB' : '#A5B1C3'} />
  </svg>
);

export default KeywordsIcon;
