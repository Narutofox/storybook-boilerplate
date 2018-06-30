import React from 'react';
import PropTypes from 'prop-types';
import fontAwesomeStyles from './font-awesome.min.css';
import styles from './index.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
      {this.props.children}
      <a href="#" className={styles.fa-facebook}></a>
      <a href="#" className={styles.fa-twitter}></a>
      <a href="#" className={styles.fa-google}></a>
      <a href="#" className={styles.fa-linkedin}></a>
      </div>
    )
  }
}

Footer.propTypes = {
  children:PropTypes.node
};
