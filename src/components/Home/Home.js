// @flow
import * as React from 'react';
import './Home.css';
import HeadImg from '../../images/headimage.png';
import { Typer } from '../Typer/Typer';

export const Home = () => (
  <div className="home">
    <div className="typer-container">
      <Typer />
    </div>
    <div className="image-container">
      <img className="headImage" src={HeadImg} alt="Profile" />
    </div>
  </div>
);
