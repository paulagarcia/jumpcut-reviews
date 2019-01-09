const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const boxShadow = {
  boxShadow:
    '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
};

const text = {
  fontFamily: '"Barlow Semi Condensed", sans-serif'
};

const sectionTitle = {
  fontFamily: '"Barlow Semi Condensed", sans-serif',
  color: '#26213b',
  fontStyle: 'italic',
  letterSpacing: '1.9px',
  fontSize: '2.5rem',
  marginTop: 0,
  textAlign: 'center',
  marginBottom: '0',
  '@media(min-width: 600px)':{
    fontSize: '3.5rem',
  }
}
const sectionSubtitle = {
  fontFamily: '"Barlow Semi Condensed", sans-serif',
  color: '#888',
  textAlign:'center',
  fontSize: '1.2rem',
  marginTop: '0.5em',
  marginBottom: '4em',
  fontWeight: '300',
}

const fullWidthSection = {
  maxWidth: '1920px',
  overflow: 'hidden',
  width: '100%',
  margin: '6em 0 0',
  fontFamily: '"Barlow Semi Condensed", sans-serif',
}

const sectionContainer = {
  maxWidth: '1920px',
  overflow: 'hidden',
  width: '85%',
  margin: '4em auto 0',
  fontFamily: '"Barlow Semi Condensed", sans-serif',
  paddingBottom: '4em',
  borderBottom: '1px solid #e2daf4',
  '@media (min-widht: 600px)':{
    margin: '8em auto 0',
  }
}

const imgResponsive = {
  width: '100%',
  height: 'auto'
}

export {
  //variables
  transition,
  boxShadow,
  text,
  sectionTitle,
  sectionSubtitle,
  sectionContainer,
  fullWidthSection,
  imgResponsive,
}
