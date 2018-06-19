import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class Header extends React.Component {
  render() {
    return <div className={styles.header}>{this.props.children}</div>;
  }
}

Header.propTypes = {
  children:PropTypes.node
};
