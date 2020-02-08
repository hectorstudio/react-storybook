import React from 'react';
import { action } from '@storybook/addon-actions';

import Select from './Select'
import '../../App/Root/Root.scss';

const options = [
  {value: 'value1', label: 'label1'},
  {value: 'value2', label: 'label2'},
  {value: 'value3', label: 'label3'},
]

export default {
  component: Select,
  title: 'Select'
}

export const normal = () => (
  <Select placeholder='Label' options={options} onChange={action('changed')} />
);

export const multi = () => (
  <Select placeholder='Label' options={options} onChange={action('changed')} isMulti />
);