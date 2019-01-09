import { text, transition } from '../general-styles.js';
const menuStyles = {
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    ...transition,
    '& span':{
      justifyContent: 'left',
    },
    '&:hover':{
      backgroundColor: 'transparent',
      opacity: '0.9'
    }

  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menu: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  menuItem: {
    ...text,
    ...transition,
    fontSize: '1rem',
    padding: '1em 1em 1em 2em',
    position: 'relative',
    bottom: '0',
    '&:hover':{
      bottom: '7px',
      backgroundColor: 'transparent'
    }
  }

}

export default menuStyles;
