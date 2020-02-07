/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Label from './Label';
import '../../App/Root/Root.scss';
import Input from '../Input/Input';

export default {
  component: Label,
  title: 'Label',
};

export const normal = () => (
  <Label title='Hello Label' />
);

export const withInput = () => (
  <Label title='Firstname *'>
    <Input name='firstname' />
  </Label>
);

export const toTheRight = () => (
  <Label position='right' title='Firstname *'>
    <Input name='firstname' />
  </Label>
);

export const disabled = () => (
  <Label title='Firstname *' disabled>
    <Input name='firstname' disabled />
  </Label>
);
