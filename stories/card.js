import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Card from '../components/card';
import beers from './beers.json';

const cardStory = storiesOf('Card', module);

cardStory.add('simple', () => (
  <Card imgUrl='https://images.punkapi.com/v2/2.png' name='PIvo' tagline='Naše pivo'></Card>
));

cardStory.add('allBeers', () => {
    const beerCards = beers.map(beer => <Card key={beer.id} imgUrl={beer.image_url} name={beer.name} tagline={beer.tagline}></Card>);
    return <div>{beerCards}</div>
  });

