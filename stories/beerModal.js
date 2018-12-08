import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import BeerModal from '../components/beerModal';

const beerModalStory = storiesOf('BeerModal', module);

beerModalStory.add('default', () => (
  <BeerModal show={true} imgUrl="https://images.punkapi.com/v2/keg.png" beerName="Buzz" beerDescription={'A Real Bitter Experience.'} beerId = {1} onClose={action('onClose')} addBeerToCart={action('addBeerToCart')} markBeerAsFavorite={action('markBeerAsFavorite')}></BeerModal>
));
