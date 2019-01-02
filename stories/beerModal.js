import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import BeerModal from '../components/beerModal';

const beerModalStory = storiesOf('BeerModal', module);

beerModalStory.add('default', () => (
  <BeerModal show={true} imgUrl="https://images.punkapi.com/v2/keg.png" beerName="Buzz" beerDescription={'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.'} beerId = {1} onClose={action('onClose')} addBeerToCart={action('addBeerToCart')} markBeerAsFavorite={action('markBeerAsFavorite')}></BeerModal>
));

beerModalStory.add('isFavorite', () => (
  <BeerModal show={true} isFavorite={true} imgUrl="https://images.punkapi.com/v2/keg.png" beerName="Buzz" beerDescription={'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.'} beerId = {1} onClose={action('onClose')} addBeerToCart={action('addBeerToCart')} markBeerAsFavorite={action('markBeerAsFavorite')}></BeerModal>
));
