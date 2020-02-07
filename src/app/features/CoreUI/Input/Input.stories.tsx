import React from 'react';
import { action } from '@storybook/addon-actions';

import Input from './Input';
import '../../App/Root/Root.scss';

export default {
  component: Input,
  title: 'Input',
};

export const normal = () => (
  <Input onChange={action('changed')} />
);

export const fullWidth = () => (
  <Input fillWidth onChange={action('changed')} />
);

export const withPlaceholder = () => (
  <Input placeholder='Input...' onChange={action('changed')} />
);

export const error = () => (
  <Input value='Input...' error onChange={action('changed')} />
);

export const disabled = () => (
  <Input
    value='Disabled Text'
    disabled
    onChange={action('changed')}
  />
);
