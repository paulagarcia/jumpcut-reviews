import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import photoBoxStyles from '../styles/photoBoxStyles';
import youtubeIcon from '../images/youtube.svg';
import instaIcon from '../images/instagram.svg';
import faceIcon from '../images/facebook.svg';

const PhotoBox = (props) => {
  const { classes } = props;
  return(
    <div className={classes.container}>
      <figure className={classes.photoContainer}>
        <img src={props.picture} alt="Successfull Stories Jumpcut" className={classes.img} />
        <div className={classes.photoFooter}>
          {props.youtubeLink ?
          <a href={props.youtubeLink} target="_blank" rel="noopener noreferrer">
            <span>{props.youtube}</span>
            <img src={youtubeIcon} alt="youtube link"/>
          </a> : null }
          {props.instaLink ?
          <a href={props.instaLink} target="_blank" rel="noopener noreferrer">
            <span>{props.insta}</span>
            <img src={instaIcon} alt="youtube link"/>
          </a> : null }
          {props.faceLink ?
          <a href={props.faceLink} target="_blank" rel="noopener noreferrer">
            <span>{props.face}</span>
            <img src={faceIcon} alt="youtube link"/>
          </a> : null }

        </div>
      </figure>
      <div className={classes.footer}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.description}>{props.description}</p>
      </div>
    </div>

  )
}

export default withStyles(photoBoxStyles)(PhotoBox);
