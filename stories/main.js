import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Main from '../components/main';
import Footer from '../components/footer';
import Header from '../components/header';
import Navigation from '../components/navigation';
const mainStory = storiesOf('Main', module);

mainStory.add('with text', () => {
  return <Main>fgfdgfd</Main>;
});

mainStory.add('header nav footer', () => {
  return (
    <div>
        <Header><img src="https://www.maxpixel.net/static/photo/2x/Luck-Letters-Data-Table-Las-Vegas-Numbers-Games-2097929.jpg"/></Header>
        <Navigation></Navigation>
        <Footer>Ivan Čiček &copy; 2018</Footer>
    </div>
);
});


