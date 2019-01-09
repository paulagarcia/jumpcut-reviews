import { sectionContainer , sectionTitle, sectionSubtitle, fullWidthSection} from '../general-styles.js';
const sectionStyles = {
  sectionContainer:{
    ...sectionContainer
  },
  photoBoxsContainer:{
    //flexWrap: 'nowrap'
  },
  photoBoxContainer:{
    maxWidth: '400px',
    '@media (min-width: 750px)':{
      maxWidth: 'calc(100% / 2)'
    },
    '@media (min-width: 960px)':{
      maxWidth: 'calc(100% / 3)'
    }
  },
  sectionTitle:{
    ...sectionTitle
  },
  sectionSubtitle:{
    ...sectionSubtitle
  },
  sectionFullContainer:{
    ...fullWidthSection
  }
}

export default sectionStyles;
