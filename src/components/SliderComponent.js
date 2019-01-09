import React from "react";
// Pacakege for the slider
import Slider from "react-slick";
// Content of the testimonials
import testimonials from './testimonials';
import { withStyles } from '@material-ui/core/styles';
import sliderStyles from '../styles/sliderStyles';
import Quote from '@material-ui/icons/FormatQuote'

const SliderComponent = (props) => {
  const {classes} = props;
  var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={classes.sliderContainer}>
        <Slider {...settings}>
          {testimonials.map(data =>
            <div className={classes.card} key={data.id}>
              <p className={classes.author}>{data.author}</p>
              <p className={classes.authorInfo}>{data.authorInfo}</p>
              <p className={classes.testimonial}>{data.testimonial}</p>
              <Quote className={classes.quote}/>
            </div>
          )}
        </Slider>
      </div>
    );
}


export default withStyles(sliderStyles)(SliderComponent);
