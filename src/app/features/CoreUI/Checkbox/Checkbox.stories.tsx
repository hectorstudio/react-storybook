import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';
import '../../App/Root/Root.scss';
import TwoColumnGrid from '../TwoColumnGrid/TwoColumnGrid';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const normal = () => (
  <TwoColumnGrid>
    <Checkbox label='Checkbox' onChange={action('changed')} />
    <Checkbox label='Checked Default' onChange={action('changed')} checked />
  </TwoColumnGrid>
);

export const disabled = () => (
  <Checkbox label='Checkbox' onChange={action('changed')} disabled />
)
