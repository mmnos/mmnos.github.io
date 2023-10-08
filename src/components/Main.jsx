import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';
import rocketLaunchImage from '../assets/images/rocketLaunchImage.svg';
import devCodingImage2 from '../assets/images/devCodingImage2.svg';
import contactImage from '../assets/images/contactImage.svg';
import '../App.scss';

export const Main = () => (
  <div className='container'>
    <div className='row'>
      <div className='col-sm-4'></div>
      <div className='col-sm-4'>
        <div className='mainContainer'>
          <div className='imageContainer'>
            <img
              className='illustrationStylingMain'
              src={rocketLaunchImage}
              alt='illustration of Rocket'
            />
          </div>
          <h4 className='sectionHeaders'>My Journey</h4>
          <p className='sectionDescriptions'>
            Prior to landing a developer position, I worked in retail and
            delivered pizzas. In 2019, I went through a coding bootcamp which is
            where I gained my foundation in software development. After
            graduating, I returned as a Teaching Assistant for one cohort and I
            landed my first software engineering position!
          </p>
        </div>
      </div>
      <div className='col-sm-4'></div>
    </div>
    <div className='row'>
      <div className='col-sm-4'></div>
      <div className='col-sm-4'>
        <div className='mainContainer'>
          <div className='imageContainer'>
            <img
              className='illustrationStylingMain'
              src={devCodingImage2}
              alt='illustration of guy coding'
            />
          </div>
          <h4 className='sectionHeaders'>Technical Skills</h4>
          <p className='sectionDescriptions'>
            Through work experience, I've gained knowledge in full-stack
            enterprise development using technologies such as React, TypeScript,
            GraphQL and Apollo in both monolithic and microservice
            architectures.
          </p>
        </div>
      </div>
      <div className='col-sm-4'></div>
    </div>
    <div className='row'></div>
    <div className='row contactContainer'>
      <div className='col-sm-4'></div>
      <div className='col-sm-4'>
        <div className='mainContainer'>
          <div className='imageContainer'>
            <img
              className='illustrationStylingMain'
              src={contactImage}
              alt='illustration of notifications'
            />
          </div>
          <h4 className='sectionHeaders'>Contact</h4>
          <div className='contactLinksContainer'>
            <a
              className='contactLinks'
              href='https://github.com/mmnos'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoLogoGithub size='24px' />
            </a>
            <a
              className='contactLinks'
              href='https://www.linkedin.com/in/michael-nos/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedinIn color='#2867B2' size='24px' />
            </a>
            <a
              className='contactLinks'
              href='mailto:mnos9897@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiGmail color='#34A853' size='24px' />
            </a>
          </div>
        </div>
      </div>
      <div className='col-sm-4'></div>
    </div>
  </div>
);
