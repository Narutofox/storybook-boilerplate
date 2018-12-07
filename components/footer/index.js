import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import { SocialIcon } from 'react-social-icons';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
          {this.props.children}
          <SocialIcon url="http://twitter.com" />
          <SocialIcon url="http://google.com" />
          <SocialIcon url="http://facebook.com" />
          <SocialIcon url="http://instagram.com" />
          <SocialIcon url="http://linkedin.com" />
      </div>
    )
  }
}

Footer.propTypes = {
  children: PropTypes.node
};
