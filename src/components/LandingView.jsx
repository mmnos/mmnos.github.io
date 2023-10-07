import React from 'react';
import webDevImage1 from '../images/Web Developer_Outline.svg';
import webDevImage2 from 'src/images/Imac_Isometric.svg';
import ReactRotatingText from 'react-rotating-text';
import 'src/App.scss';

export const LandingView = () => {
  return (
    <div className='row headerContainer'>
      <div className='col-sm-4'>
        <img
          className='illustrationStylingHeader'
          src={webDevImage1}
          alt='web developer illustration #1'
        />
      </div>
      <div className='col-sm-4'>
        <div className='contentColumn'>
          <h1>Hey there, </h1>
          <h1>I'm Michael</h1>
          <div id='breakLine'></div>
          <ReactRotatingText
            id='typewriterId'
            className='typewriter'
            items={['Software Engineer', 'Adventurer', 'Boba Lover']}
          />
        </div>
      </div>
      <div className='col-sm-4'>
        <img
          className='illustrationStylingHeader'
          src={webDevImage2}
          alt='web developer illustration #2'
        />
      </div>
    </div>
  );
};
