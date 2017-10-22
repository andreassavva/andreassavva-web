import React, {Component} from 'react';
import Button from '../Button/Button';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Button scroll={12} value="Home"></Button>
      </div>
    );
  }
}

export default Header;