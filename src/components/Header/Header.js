// @flow
import * as React from 'react';
import './Header.css';
import { HeaderButton } from '../HeaderButton/HeaderButton';
import { viewObjects } from '../../App';

export const Header = () => {
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    window.addEventListener('resize', () => onWindowResize());
    return window.removeEventListener('resize', () => onWindowResize());
  }, []);

  const onWindowResize = () => setWindowHeight(window.innerHeight);

  return (
    <div className="header">
      {viewObjects.map((view, index) => (
        <HeaderButton
          key={`HeaderButton__${index}`}
          text={view.text}
          border={view.buttonBorder}
          scroll={index * windowHeight}
        />
      ))}
    </div>
  );
};
