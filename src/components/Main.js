import React from 'react';
import myJourneyImage from '../images/Rocket Launch_Two Color.svg';
import technicalSkillsImage from '../images/Coding _Two Color.svg';
import softSkillsImage from '../images/Team work_Monochromatic.svg';
import contactImage from '../images/Notifications_Isometric.svg';
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
              company, which is where I'm still at today and I love it!
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
              Through professional work experience, I've been able to further
              develop current skills and obtain new ones. Currently, I use
              technologies like React, GraphQL, Node.js, MongoDB, AWS Lambda,
              and Docker.
            </p>
            <p className='sectionDescriptions'>
              You can check out some of my work here :{' '}
              <a
                className='customLink'
                href='https://github.com/mmnos'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
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
        <div className='col-sm-4'></div>
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
            <p className='contactLinks'>
              <a
                className='customLink'
                href='mailto:mnos9897@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Email Me
              </a>
            </p>
            <p className='contactLinks'>
              <a
                className='customLink'
                href='https://www.linkedin.com/in/michael-nos/'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className='col-sm-4'></div>
      </div>
    </div>
  );
};

export default Main;
