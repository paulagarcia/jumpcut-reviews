import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import sectionStyles from '../styles/sectionStyles';
// Local Component
import SliderComponent from './SliderComponent';

const Students = (props) => {
  const { classes } = props;
  return(
    <section className={classes.sectionFullContainer}>
      <h2 className={classes.sectionTitle}> THE JUMPCUT EXPERIENCE </h2>
        <SliderComponent />
    </section>
  )
}

export default withStyles(sectionStyles)(Students);
