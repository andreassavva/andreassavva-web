import React, {Component} from 'react';
import './Home.css';
import HeadImg from '../../images/headimage.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <div className="textHi">Hi</div>
          <div className="text">I am<br />Andreas</div>
        </div>
        <img className="headImage" src={HeadImg} alt="Profile"/>
      </div>
    );
  }
}

export default Home;