import React from 'react';
import { LandingView } from './components/LandingView';
import { Main } from './components/Main';
import './App.scss';

export const App = () => (
  <React.Fragment>
    <LandingView />
    <Main />
  </React.Fragment>
);
