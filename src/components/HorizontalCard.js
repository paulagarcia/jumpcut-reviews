import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import horizontalCardStyles from '../styles/horizontalCardStyles';
import youtubeIcon from '../images/youtube.svg'

const HorizontalCard = (props) => {
  const { classes } = props;
  const image = props.picture
  return(
    <div className={classes.cardContainer}>
      <div className={classes.fotoContainer}>
        <div className={classes.foto} style={{backgroundImage: "url(" + image + ")",}}/>
      </div>
      <div className={classes.textContainer}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.description}>{props.description}</p>
        <ul className={classes.extraList}>
        {props.extra.map((extra, i) => (
          <li key={i}>{extra}</li>
        ))}
        </ul>
        <a href={props.youtubeLink} target="_blank" className={classes.socialMedia} rel="noopener noreferrer">
          <span>{props.youtube}</span>
          <img src={youtubeIcon} alt="youtube link"/>
        </a>
      </div>
    </div>
  )
}

export default withStyles(horizontalCardStyles)(HorizontalCard);
