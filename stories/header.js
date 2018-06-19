import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Header from '../components/header';

const headerStory = storiesOf('Header', module);

headerStory.add('with text', () => {
  return <Header>zzzzzzzz</Header>;
});


headerStory.add('with image', () => {
    return <Header><img src="https://www.maxpixel.net/static/photo/2x/Luck-Letters-Data-Table-Las-Vegas-Numbers-Games-2097929.jpg"/></Header>;
  });

