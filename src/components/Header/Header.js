// @flow
import * as React from 'react';
import './Header.css';
import { HeaderButton } from '../HeaderButton/HeaderButton';

export const Header = () => (
  <div className="header">
    <HeaderButton scroll={0} text="HOME" />
    <HeaderButton
      scroll={document.documentElement?.clientHeight}
      text="SKILLSET"
    />
    <HeaderButton
      scroll={document.documentElement?.clientHeight}
      text="LET'S TALK"
      border
    />
  </div>
);
