import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import landingStyles from '../styles/landingStyles';
import Fade from '@material-ui/core/Fade';

const LandingPage = (props) => {
  const classes = props.classes
  return(
    <header className={classes.reviewsHeader}>
      <div className={classes.videoContainer}>
        <video className={classes.video} autoPlay muted loop>
          <source src='https://s3.amazonaws.com/jumpcut.com/Spotlight+Video+Banner.mp4' type='video/mp4' />
        </video>
        <div className={classes.videoOverlay}/>
      </div>
      <Fade in={true} timeout={2500}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>SUCCESS STORIES</h1>
          <h2 className={classes.subtitle}>How Jumpcut helped them achieve success </h2>
        </div>
      </Fade>
    </header>
  )
}

export default withStyles(landingStyles)(LandingPage);
