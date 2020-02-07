import React from 'react';

import TwoColumnGrid from './TwoColumnGrid';
import '../../App/Root/Root.scss';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default {
  component: TwoColumnGrid,
  title: 'Two Column Grid',
};

export const normal = () => (
  <TwoColumnGrid>
    <Label title='Firstname *'>
      <Input fillWidth name='firstname' />
    </Label>
    <Label title='Lastname *'>
      <Input fillWidth name='lastname' />
    </Label>
    <Label title='E-Mail *'>
      <Input fillWidth name='email' type='email' />
    </Label>
    <Label title='Phone Number'>
      <Input fillWidth name='phone' />
    </Label>
    <Label title='Another random field'>
      <Input fillWidth name='Another random field' />
    </Label>
    <Button type='submit'>Submit</Button>
  </TwoColumnGrid>
);

export const bigGap = () => (
  <TwoColumnGrid size='big'>
    <Label title='Firstname *'>
      <Input fillWidth name='firstname' />
    </Label>
    <Label title='Lastname *'>
      <Input fillWidth name='lastname' />
    </Label>
    <Label title='E-Mail *'>
      <Input fillWidth name='email' type='email' />
    </Label>
    <Label title='Phone Number'>
      <Input fillWidth name='phone' />
    </Label>
    <Label title='Another random field'>
      <Input fillWidth name='Another random field' />
    </Label>
    <Button type='submit'>Submit</Button>
  </TwoColumnGrid>
);
