import React, { Component } from 'react';
import Button from '../Button/Button';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Button scroll={0} value="HOME" />
        <Button
          scroll={document.documentElement.clientHeight}
          value="SKILLSET"
        />
        <Button
          scroll={document.documentElement.clientHeight}
          value="LET'S TALK"
          border
        />
      </div>
    );
  }
}

export default Header;
