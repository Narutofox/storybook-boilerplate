import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import RoundIconButton from '../components/roundIconButton';

const roundIconButtonStory = storiesOf('RoundIconButton', module);

roundIconButtonStory.add('default', () => (
  <RoundIconButton imageLink="https://upload.wikimedia.org/wikipedia/en/5/54/Information.png" onClick={action('clicked')} ></RoundIconButton>
));

 
  roundIconButtonStory.add('disabled', () => (
    <RoundIconButton imageLink="https://upload.wikimedia.org/wikipedia/en/5/54/Information.png" disabled={true} ></RoundIconButton>
  ));
