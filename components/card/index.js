import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import info from '../../content/icons/PNG/info.png'
import plus from '../../content/icons/PNG/plus.png'
import starFull from '../../content/icons/PNG/star-full.png'
import starEmpty from '../../content/icons/PNG/star-empty.png'

export default class Card extends React.Component {
    getFavouriteIcon(isFavourite)
    {
        if(isFavourite !== undefined && isFavourite === "true")
        { 
            return {starFull};
        }
        else
        {
            return {starEmpty};
        }        
    }

    render() 
    {
      return (
          <div className={styles.card}>
              <img src={this.props.imgUrl} style={{maxWidth: '200px',maxHeight: '200px'}}/>
              <div className={styles.cardStar}>
                    <RoundIconButton imageLink={this.getFavouriteIcon(this.props.isFavourite)} onClick={this.props.onStarClick}/>
              </div>
                <div className={styles.cardActions}>
                    <RoundIconButton imageLink={info} onClick={this.props.onInfoClick}/>
                    <RoundIconButton imageLink={plus} onClick={this.props.onPlusClick}/>
                </div>
              <div className={styles.container}>
                  <h4>{this.props.name}</h4>
                  <p>{this.props.tagline}</p>
              </div>
          </div>
      )
    }
  }

  Card.PropTypes={
      imgUrl: String,
      name: String,
      tagline: String
  };
  