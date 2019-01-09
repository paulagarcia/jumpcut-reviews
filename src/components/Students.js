import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import sectionStyles from '../styles/sectionStyles';
// Material Component
import Grid from '@material-ui/core/Grid';
// Stories Data
import studentsData from './studentsData';
// Local Component
import HorizontalCard from './HorizontalCard';
import ScrollAnimation from 'react-animate-on-scroll';

const Students = (props) => {
  const { classes } = props
  return(
    <section className={classes.sectionContainer}>
      <h2 className={classes.sectionTitle}> STUDENTS ON THE RISE </h2>
      <p className={classes.sectionSubtitle}>Check out these up and coming entrepreneurs whose businesses are about ready to take off.</p>
      <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
        <Grid direction="column" container justify="center" alignItems="center" className={classes.photoBoxsContainer}>
          {studentsData.map(student => (
            <HorizontalCard {...student} key={student.id}/>
        ))}
        </Grid>
      </ScrollAnimation>
    </section>
  )
}

export default withStyles(sectionStyles)(Students);
