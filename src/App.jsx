import React from 'react';
import { LandingView } from 'src/components/LandingView';
import { Main } from 'src/components/Main';
import './App.scss';

export const App = () => (
  <React.Fragment>
    <LandingView />
    <Main />
  </React.Fragment>
);
