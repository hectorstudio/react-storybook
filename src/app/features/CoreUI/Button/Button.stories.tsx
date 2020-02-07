import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';
import '../../App/Root/Root.scss';
import TwoColumnGrid from '../TwoColumnGrid/TwoColumnGrid';

export default {
  component: Button,
  title: 'Button',
};

export const primary = () => (
  <TwoColumnGrid>
    <Button onClick={action('clicked')} size='small'>
      Small
    </Button>
    <Button onClick={action('clicked')} disabled size='small'>
      Small Disabled
    </Button>
    <Button onClick={action('clicked')} size='normal'>
      Normal
    </Button>
    <Button onClick={action('clicked')} disabled size='normal'>
      Normal Disabled
    </Button>
    <Button onClick={action('clicked')} size='big'>
      Big
    </Button>
    <Button onClick={action('clicked')} disabled size='big'>
      Big Disabled
    </Button>
  </TwoColumnGrid>
);

export const secondary = () => (
  <TwoColumnGrid>
    <Button onClick={action('clicked')} inverse size='small'>
      Small
    </Button>
    <Button onClick={action('clicked')} inverse disabled size='small'>
      Small Disabled
    </Button>
    <Button onClick={action('clicked')} inverse size='normal'>
      Normal
    </Button>
    <Button onClick={action('clicked')} inverse disabled size='normal'>
      Normal Disabled
    </Button>
    <Button onClick={action('clicked')} inverse size='big'>
      Big
    </Button>
    <Button onClick={action('clicked')} inverse disabled size='big'>
      Big Disabled
    </Button>
  </TwoColumnGrid>
);

export const fullWidth = () => (
  <>
    <Button onClick={action('clicked')} fillWidth>
      Primary Button
    </Button>
    <Button onClick={action('clicked')} fillWidth inverse>
      Secondary Button
    </Button>
  </>
);

export const loading = () => (
  <Button loading onClick={action('clicked')}>
    Loader
  </Button>
);
