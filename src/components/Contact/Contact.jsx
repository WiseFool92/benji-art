import React from 'react';
// import Benji from '../Img/Benji.JPEG'

function Contact() {
  
  const contactStyle = {
    marginLeft: '1.25vw',
    marginRight: '1.25',
    padding: '5rem',
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }

  // const contactBenji = {
  //   height: '55vh',
  //   width: '15vw',
  //   borderRadius: '5px',
  //   boxShadow: '5px 5px 8px 5px rgba(0, 0, 0, 0.449)',
  // }

  const contactTitle = {
    textAlign: 'center',
    padding: '3rem',
    marginTop: '0rem',
    color: 'ivory',
  }

  const background = {
    // backgroundImage: `url(${contactSplash})`,
    height: '100%',
    // backgroundSize: 'cover',
  }
  
  const textStyle = {
    color: 'ivory'
    
  }

  return (
    <>
      <div style={background}>
        <h1 stlye={contactTitle}>Artist</h1>
        <div className='row' style={contactStyle}>
          <div className='col-md-4'>
            {/* <img src={Benji} style={contactBenji} alt='benji' /> */}
            <em><h4 style={textStyle}>Benji Echt</h4></em>
            <p style={textStyle}>insert email here</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;