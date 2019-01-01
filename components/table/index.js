import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import RoundIconButton from '../roundIconButton'
export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.renderTableData = this.renderTableData.bind(this);
  }
  // eslint-disable-next-line class-methods-use-this
  renderTableData(tableBodyData) {
    if (tableBodyData !== undefined) {
      if (tableBodyData.value !== '' && tableBodyData.value !== null && tableBodyData.value !== undefined) {
        return tableBodyData.value;
      } else if (tableBodyData.image_url !== '' && tableBodyData.image_url !== null && tableBodyData.image_url !== undefined) {
        const imgStyle = {
          maxWidth: '10em',
          maxHeight: '10em'
        };
        return (
          <img src={tableBodyData.image_url} alt={tableBodyData.image_alt} style={ imgStyle }/>);
      } else if (tableBodyData.inputType !== '' && tableBodyData.inputType !== null && tableBodyData.inputType !== undefined) {
        return (
           <input type={tableBodyData.inputType} pattern={tableBodyData.inputPattern} defaultValue={tableBodyData.inputValue} onChange={tableBodyData.inputChange}/>);
      } else if (tableBodyData.actions !== null && tableBodyData.actions !== undefined) {
        const tableActions = tableBodyData.actions.map((action, index) => (
          <RoundIconButton key={index} imageLink={action.ImageUrl} onClick={action.OnClick} ></RoundIconButton>));
        return tableActions;
      }
    }
  }
  render() {
    return (
          <table className={`${styles.table} ${styles.tableBordered}`}>
            <thead>
            <tr key="RowHeader">
                {this.props.headerArray.map((header, index) => (<th scope="col" key={`HeaderContent${index}`}>{header}</th>))}
            </tr>
          </thead>
              <tbody>
              {this.props.tableBodyData.map((row, rowIndex) => (
                  <tr key={`DataRow${rowIndex}`}>
                    {row.map((data, index) =>
                    <td scope="row" key={`DataRowContent${index}`}>{ this.renderTableData(data)} </td>)}
                  </tr>
              ))}
            </tbody>
        </table>
    );
  }
}

Table.propTypes = {
  headerArray: PropTypes.array,
  renderTableData: PropTypes.func,
  tableBodyData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape([{
    value: PropTypes.string,
    image_url: PropTypes.string,
    inputType: PropTypes.string,
    inputPattern: PropTypes.string,
    inputValue: PropTypes.string,
    inputChange: PropTypes.func,
    actions: PropTypes.arrayOf(PropTypes.shape([{
      ImageUrl: PropTypes.string,
      OnClick: PropTypes.func
    }]))
  }])))
};

