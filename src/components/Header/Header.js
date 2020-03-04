// @flow
import * as React from 'react';
import './Header.css';
import { Button } from '../Button/Button';

export const Header = () => (
  <div className="header">
    <Button scroll={0} text="HOME" />
    <Button scroll={document.documentElement?.clientHeight} text="SKILLSET" />
    <Button
      scroll={document.documentElement?.clientHeight}
      text="LET'S TALK"
      border
    />
  </div>
);
