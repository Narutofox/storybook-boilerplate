import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Table from '../components/table';
import close from '../content/icons/PNG/cancel-circle.png';
import beers from './beers.json';

const tableStory = storiesOf('Table', module);

function setBeerInCart(beerId, event) {
  alert(beerId);
  alert(event.target.value);
}

function beerToDataSet(beer) {
  return (
    [
      { image_url: beer.image_url, image_alt: beer.name },
      { value: beer.name },
      {
        inputValue: 1,
        inputType: 'text',
        inputPattern: '[0-9]*',
        inputChange: setBeerInCart.bind(this, beer.id)
      },
      { actions: [{ ImageUrl: close, OnClick: action('img delete') }] }
    ]
  );
}

tableStory.add('example', () => {
  const headers = ['Name', 'Position', 'Office', 'Ext', 'Start', 'Salary'];
  const tableBodyData = [
    [{ value: 'Tiger Nixon' }, { value: 'System Architect' },
      { value: 'Edinburgh' }, { value: '5421' }, { value: '2011/04/25' }, { value: '$320,800' },
      { actions: [{ ImageUrl: close, Alt: 'Delete', OnClick: action('img delete') }] }
    ],
    [
      { image_url: 'https://images.punkapi.com/v2/keg.png', image_alt: 'test' },
      { value: 'System Architect' },
      { value: 'Edinburgh' }, { value: '5421' }, { value: '2011/04/25' }, { value: '$320,800' },
      { actions: [{ ImageUrl: close, Alt: 'Delete', OnClick: action('img delete') }] }
    ],
    [{ inputType: 'number', inputValue: '7', inputChange: action('inputChange') }, { value: 'System Architect' },
      { value: 'Edinburgh' }, { value: '5421' }, { value: '2011/04/25' }, { value: '$320,800' },
      { actions: [{ ImageUrl: close, Alt: 'Delete', OnClick: action('img delete') }] }
    ]
  ];
  return <Table headerArray={headers} tableBodyData ={tableBodyData}></Table>;
});

tableStory.add('beers', () => {
  const headers = ['', 'Name', 'Quantity'];
  const dataSet = beers.map(beer => beerToDataSet(beer));

  return <Table headerArray={headers} tableBodyData ={dataSet}></Table>;
});
