import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class Table extends React.Component {
  render() {

      return (
          <table className={styles.table1}>
              <tbody>
              <tr key="RowHeader">
                {this.props.headerArray.map((header,index) => (<th key={"HeaderContent"+index}>{header}</th>))} 
              </tr>
              {this.props.dataArray.map((row,rowIndex) => (
                  <tr key={"DataRow"+rowIndex}>
                       {row.map((data,index) => (<td key={"DataRowContent"+rowIndex}>{data}</td>))} 
                  </tr>
              ))}
            </tbody>
        </table>
      )
    }
      
}

Table.propTypes = {
  headerArray: PropTypes.array,
  dataArray: PropTypes.array
};

