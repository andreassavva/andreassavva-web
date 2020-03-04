// @flow
import * as React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Skillset } from './components/Skillset/Skillset';

export const App = () => (
  <div className="app">
    <Header />
    <Home />
    <Skillset />
  </div>
);
