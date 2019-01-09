import { imgResponsive, boxShadow } from '../general-styles.js';
const photoBoxStyles = {
  img:{
    ...imgResponsive,
    ...boxShadow,
    borderRadius: '3px',
  },
  photoContainer:{
    position: 'relative',
    margin: '0',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover::before':{
      animation: 'shine .85s',
      opacity: '0.9'
    },
    '&::before':{
      position: 'absolute',
    	top: '0',
    	left: '-85%',
    	zIndex: '2',
    	display: 'block',
    	content: '" "',
    	width: '50%',
    	height: '100%',
    	background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%)',
    	transform: 'skewX(-25deg)',
    },
  },
  '@keyframes shine': {
  	'100%': {
  		left: '125%',
  	}
  },
  photoFooter:{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.03)',
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03), rgba(241, 242, 250, 0.6), rgba(241, 242, 250, 0.9))',
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
    padding: '2em 0',
    '& img':{
      maxWidth: '35px'
    },
    '& a':{
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
    },
    '& span':{
      marginRight: '.5rem',
      color: '#25213c',
      fontSize: '1.3rem',
      fontWeight: '500',
    }
  },
  name:{
    fontSize: '2rem',
    margin: '0.5em 0 0.2em',
    color: '#6c5498',
    textTransform: 'uppercase',
    letterSpacing: '10px',
    fontWeight: '600'
  },
  description:{
    paddingRight: '1em',
    lineHeight: '1.5rem',
    fontSize: '1.1rem',
    color: '#666',
    fontWeight: '300',
    marginTop: '0',
  }
}

export default photoBoxStyles;
