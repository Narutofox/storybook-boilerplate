import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Label from '../components/label';

const LabelStory = storiesOf('Label', module);

LabelStory.add('Simple', () => (
    <Label>I am the bone of my sword</Label>
  ));
  