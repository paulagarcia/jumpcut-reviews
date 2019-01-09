import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import sectionStyles from '../styles/sectionStyles';
// Material Component
import Grid from '@material-ui/core/Grid';
// Stories Data
import storiesData from './storiesData';
// Local Component
import PhotoBox from './PhotoBox';

const Stories = (props) => {
  const { classes } = props
  return(
    <section className={classes.sectionContainer}>
      <Grid container spacing={16} justify="center" alignItems="flex-start" className={classes.photoBoxsContainer}>
        {storiesData.map(story => (
        <Grid item key={story.id} className={classes.photoBoxContainer}>
          <PhotoBox {...story}/>
        </Grid>
      ))}
      </Grid>
    </section>
  )
}

export default withStyles(sectionStyles)(Stories);
