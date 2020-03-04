// @flow
import * as React from 'react';
import './Home.css';
import HeadImg from '../../images/headimage.png';

export const Home = () => (
  <div className="home">
    <div>
      <div className="text-big">HI</div>
      <div className="text">
        I AM ANDREAS
        <br />A FRONT-END DEVELOPER
      </div>
    </div>
    <img className="headImage" src={HeadImg} alt="Profile" />
  </div>
);
