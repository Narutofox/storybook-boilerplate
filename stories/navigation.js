import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Navigation from '../components/navigation';

const navigationStory = storiesOf('Navigation', module);

navigationStory.add('default', () => {
  return <Navigation></Navigation>;
});


navigationStory.add('custom', () => {
  const  links = [
    {
      path: "https:www.google.com",
      active: true,
      content: "Google"
    },
    {
      path: "https:www.racunarstvo.hr",
      active: false,
      content: "Algebra"
    },
  ];

  return <Navigation links={links}></Navigation>;
});

