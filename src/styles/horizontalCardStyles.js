import { boxShadow , transition} from '../general-styles.js';
const horizontalCardStyles = {
  cardContainer:{
    display: 'flex',
    ...boxShadow,
    background: '#fcfcfc',
    marginBottom: '2em',
    borderRadius: '3px',
    maxWidth: '100%',
    flexDirection: 'column',
    '@media (min-width: 600px)':{
      maxWidth: '1000px',
      flexDirection: 'row'
    }
  },
  foto: {
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    height: '300px',
    width: '100%',
    '@media (min-width: 600px)':{
      width: '300px',
      height: '100%',
    },
    '@media (min-width: 1000px)':{
      width: '500px',
      height: '100%',
    }
  },
  textContainer:{
    padding: '2em',
    '@media (min-width: 600px)':{
      padding: '2em 5em 5em 3em',
    }
  },
  name: {
    fontWeight: '800',
    fontSize: '2.5rem',
    margin: '0',
    color: '#ddd',
    '@media (min-width: 600px)':{
      fontSize: '4rem',
    }
  },
  description:{
    fontSize: '1.2rem',
    lineHeight: '1.5',
    color: '#666',
    fontWeight: '500',
  },
  extraList:{
    fontSize: '1rem',
    color: '#666',
    marginLeft: '-15px',
    textTransform: 'uppercase',
    letterSpacing: '7px',
    fontWeight: '300',
    lineHeight: '1.8',
    marginTop: '2rem',
  },
  socialMedia:{
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    textDecoration: 'none',
    marginTop: '2rem',
    ...transition,
    '@media (min-width: 600px)':{
        marginRight: '-2rem',
        marginBottom: '-3rem',
    },
    '& img':{
      maxWidth: '50px',
    },
    '& span':{
      fontSize: '2rem',
      color: '#333',
      marginRight: '0.2em',
      fontWeight: '600',
    },
    '&:hover':{
      transform: 'scale(1.02)'
    }
  }



}

export default horizontalCardStyles;
