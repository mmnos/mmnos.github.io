import React from 'react';
import Typewriter from 'typewriter-effect';
import devCodingImage from '../assets/images/devCodingImage.svg';
import deskSetupImage from '../assets/images/deskSetupImage.svg';
import '../App.scss';

export const LandingView = () => (
  <div className='row headerContainer'>
    <div className='col-sm-4'>
      <img
        className='illustrationStylingHeader'
        src={devCodingImage}
        alt='web developer illustration #1'
      />
    </div>
    <div className='col-sm-4'>
      <div className='contentColumn'>
        <h1>Hey there, </h1>
        <h1>I'm Michael!</h1>
        <div id='breakLine'></div>
        <Typewriter
          className='typewriter'
          options={{
            strings: ['Software Engineer', 'Adventurer'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
    <div className='col-sm-4'>
      <img
        className='illustrationStylingHeader'
        src={deskSetupImage}
        alt='web developer illustration #2'
      />
    </div>
  </div>
);
