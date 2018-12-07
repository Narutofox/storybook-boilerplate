import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Main from '../components/main';
import Footer from '../components/footer';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Card from '../components/card';
import beers from './beers.json';

const mainStory = storiesOf('Main', module);
const beerCards = beers.map(beer => <Card key={beer.id} imgUrl={beer.image_url} name={beer.name} tagline={beer.tagline}></Card>);

mainStory.add('with text', () => <Main>fgfdgfd</Main>);

mainStory.add('header nav footer', () => (
    <div>
        <Header text="Duff Bear" imgUrl="https://www.maxpixel.net/static/photo/2x/Luck-Letters-Data-Table-Las-Vegas-Numbers-Games-2097929.jpg"></Header>
        <Navigation></Navigation>
        <Footer><p>Ivan Čiček &copy; 2018</p></Footer>
    </div>
));

mainStory.add('main story', () => (
    <div>
        <Header text="Duff Bear" imgUrl="https://www.maxpixel.net/static/photo/2x/Luck-Letters-Data-Table-Las-Vegas-Numbers-Games-2097929.jpg"></Header>
        <Navigation></Navigation>
        <Main>{beerCards}</Main>
        <Footer><p>Ivan Čiček &copy; 2018</p></Footer>
    </div>
));
