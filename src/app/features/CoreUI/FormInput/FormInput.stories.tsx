import React from 'react';
import { action } from '@storybook/addon-actions';

import FormInput from './FormInput';
import '../../App/Root/Root.scss';

export default {
  component: FormInput,
  title: 'Form Input',
};

export const normal = () => (
  <FormInput label='normal' onChange={action('changed')} />
);

export const fullWidth = () => (
  <FormInput label='Full Width' fillWidth onChange={action('changed')} />
);

export const withPlaceholder = () => (
  <FormInput label='With Placeholder' placeholder='FormInput...' onChange={action('changed')} />
);

export const error = () => (
  <FormInput label='Error' value='FormInput...' error='Error Label' onChange={action('changed')} />
);

export const disabled = () => (
  <FormInput
    label='Disabled Text'
    value='Disabled Text'
    disabled
    onChange={action('changed')}
  />
);
