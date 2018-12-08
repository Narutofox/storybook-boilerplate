import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Footer from '../components/footer';
import Header from '../components/header';

const footerStory = storiesOf('Footer', module);

footerStory.add('with text', () => <Footer>Ivan Čiček &copy; 2018</Footer>);

footerStory.add('Header & Footer', () => (
        <div>
            <Header text="Duff Bear" imgUrl="https://www.maxpixel.net/static/photo/2x/Luck-Letters-Data-Table-Las-Vegas-Numbers-Games-2097929.jpg"></Header>
            <Footer><p>Ivan Čiček &copy; 2018</p></Footer>
        </div>
));
