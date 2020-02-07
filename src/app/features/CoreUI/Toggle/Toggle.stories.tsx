import React from 'react';
import { action } from '@storybook/addon-actions';

import Toggle from './Toggle';

export default {
  component: Toggle,
  title: 'Toggle',
};

export const normal = () => (
  <Toggle onChange={action('changed')} />
);

export const checked = () => (
  <Toggle defaultValue onChange={action('changed')} />
);

export const withLabel = () => (
  <Toggle label='Status' onChange={action('changed')} />
);

export const disabledNormal = () => (
  <Toggle disabled />
);

export const disabledChecked = () => (
  <Toggle defaultValue disabled />
);

export const disabledWithLabel = () => (
  <Toggle label='Status' defaultValue disabled />
);
