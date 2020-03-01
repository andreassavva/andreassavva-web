import React, { Component } from 'react';
import './Home.css';
import HeadImg from '../../images/headimage.png';

class Home extends Component {
  render() {
    return (
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
  }
}

export default Home;
