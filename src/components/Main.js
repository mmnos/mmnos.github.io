import React from 'react';
import myJourneyImage from '../images/Rocket Launch_Two Color.svg';
import technicalSkillsImage from '../images/Coding _Two Color.svg';
import contactImage from '../images/Notifications_Isometric.svg';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';
import '../App.scss';

const Main = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <div className='mainContainer'>
            <div className='imageContainer'>
              <img
                className='illustrationStylingMain'
                src={myJourneyImage}
                alt='illustration of Rocket'
              />
            </div>
            <h4 className='sectionHeaders'>My Journey</h4>
            <p className='sectionDescriptions'>
              Prior to landing my first engineering job, I spent 5 years working
              in retail and delivering pizzas. In 2019, I discovered UNH's
              coding bootcamp, which is where I gained my foundation in software
              development. Upon graduating, I returned as a Teaching Assistant
              for one cohort and I landed an engineering job at a Fortune 100
              company, which is where I'm still at today!
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
                src={technicalSkillsImage}
                alt='illustration of guy coding'
              />
            </div>
            <h4 className='sectionHeaders'>Technical Skills</h4>
            <p className='sectionDescriptions'>
              Through professional work experience, I've further developed
              skills in React, Node.js, MongoDB, GraphQL, AWS Lambda, and
              Docker.
            </p>
          </div>
        </div>
        <div className='col-sm-4'></div>
      </div>
      <div className='row'>
        {/* <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <div className='mainContainer'>
            <div className='imageContainer'>
              <img
                className='illustrationStylingMain'
                src={softSkillsImage}
                alt='illustration of teamwork'
              />
            </div>
            <h4 className='sectionHeaders'>Soft Skills</h4>
            <p className='sectionDescriptions'>
              Stemming all the way back to my first job in high school, I've
              grown and learned new skills that have helped me communicate and
              collaborate better. A few things that I value are empathy, being
              open-minded, and having the willingness to learn.
            </p>
          </div>
        </div>
        <div className='col-sm-4'></div> */}
      </div>
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
};

export default Main;
