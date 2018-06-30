import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import HyperLinkButton from '../components/hyperlinkButton';

const hyperLinkButtonStory = storiesOf('HyperlinkButton', module);

hyperLinkButtonStory.add('Google', () => (
    <HyperLinkButton text='Google' url="https:\\www.google.com"></HyperLinkButton>
  ));

  hyperLinkButtonStory.add('Facebook', () => (
    <HyperLinkButton text='Facebook' url="https:\\www.facebook.com"></HyperLinkButton>
  ));

  hyperLinkButtonStory.add('disabled', () => (
    <HyperLinkButton text='Google' url="https:\\www.google.com" disabled={true}></HyperLinkButton>
  ));