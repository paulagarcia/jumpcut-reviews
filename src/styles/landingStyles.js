import { sectionTitle } from '../general-styles.js';
const landingStyles = {
  reviewsHeader:{
    position: 'relative',
  },
  video:{
    width: '200%',
    '@media(min-width: 600px)':{
      width: '100%'
    }
  },
  videoContainer:{
    maxWidth: '100%',
    overflow: 'hidden',
  },
  videoOverlay:{
    height: '99.5%',
    position: 'absolute',
    top: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    minHeight: '1px',
    width: '100%',
  },
  titleContainer:{
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    top: '45%',
    transform: 'translateY(-55%)',
  },
  title:{
    ...sectionTitle,
    color: '#fff',
    fontSize: '3rem',
    margin: '0',
    '@media(min-width: 600px)':{
      fontSize: '5rem',
    }
  },
  subtitle:{
    ...sectionTitle,
    color: '#f2f2f2',
    fontWeight: '300',
    fontStyle: 'normal',
    marginTop: '0',
    fontSize: '1.3rem',
    '@media(min-width: 600px)':{
      fontSize: '2rem',
    }
  }
}

export default landingStyles;
