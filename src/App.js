// @flow
import * as React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './views/Home/Home';
import { Skillset } from './views/Skillset/Skillset';
import { LetsTalk } from './views/LetsTalk/LetsTalk';

export const viewObjects: Array<{|
  text: string,
  component: React.Node,
  buttonBorder?: boolean
|}> = [
  {
    text: 'home',
    component: <Home key="HomeView" />
  },
  {
    text: 'skillset',
    component: <Skillset key="SkillsetView" />
  },
  {
    text: "let's talk",
    component: <LetsTalk key="LetsTalkView" />,
    buttonBorder: true
  }
];

export const App = () => (
  <div className="app">
    <Header />
    {viewObjects.map(view => view.component)}
  </div>
);
