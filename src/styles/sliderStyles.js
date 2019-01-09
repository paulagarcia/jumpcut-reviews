const sliderStyles = {
  sliderContainer:{
    margin: '5rem 0',
  },
  card:{
    padding: '2em',
    background: '#fcfcfc',
    border: '10px solid #f1f2fa',
    borderRadius: '13px',
    position: 'relative',
    minHeight: '450px',
    '@media (min-width: 1024px)':{
        height: '450px',
    }
  },
  author:{
    fontWeight: 700,
    fontSize: '3rem',
    color: '#ddd',
    letterSpacing: '-1.3px',
    margin: '0'
  },
  authorInfo:{
    marginTop: '0.5em',
    textTransform: 'uppercase',
    letterSpacing: '4px',
    fontSize: '1rem',
    color: '#666',
    borderTop: '1px solid #f1f2fa',
    borderBottom: '1px solid #f1f2fa',
    padding: '0.6em',
  },
  testimonial:{
    fontSize: '1rem',
    color: '#444',
    lineHeight: '1.3',
    marginTop: '2em',
    position: 'relative',
    zIndex: '2'
  },
  quote:{
    position: 'absolute',
    fill: 'rgba(241, 242, 250, 0.6)',
    fontSize: '50px',
    width: '5em',
    height: '5em',
    bottom: '-64px',
    right: '-42px',
    zIndex: '1',
  }

}
export default sliderStyles;
