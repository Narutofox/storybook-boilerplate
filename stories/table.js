import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Table from '../components/table';
import close from '../content/icons/PNG/cancel-circle.png';

const tableStory = storiesOf('Table', module);

tableStory.add('example', () => {
  const headers = ['Name', 'Position', 'Office', 'Ext', 'Start', 'Salary'];
  const actions = [[{ ImageUrl: close, Alt: 'Delete', OnClick: action('img delete') }]];
  const tableBodyData = [
    [{ value: 'Tiger Nixon' }, { value: 'System Architect' },
      { value: 'Edinburgh' }, { value: '5421' }, { value: '2011/04/25' }, { value: '$320,800' }],
    [
      { image_url: 'https://images.punkapi.com/v2/keg.png', image_alt: 'test' },
      { value: 'System Architect' },
      { value: 'Edinburgh' }, { value: '5421' }, { value: '2011/04/25' }, { value: '$320,800' }],
    [{ inputType: 'number', inputValue: '7', inputChange: action('inputChange') }, { value: 'System Architect' },
      { value: 'Edinburgh' }, { value: '5421' }, { value: '2011/04/25' }, { value: '$320,800' }]
  ];
  return <Table headerArray={headers} tableBodyData ={tableBodyData} actionsArray={actions}></Table>
});

