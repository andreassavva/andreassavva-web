// @flow
import * as React from 'react';
import './Typer.css';

export const Typer = () => {
  const [text, setText] = React.useState('');

  return (
    <div className="container">
      <span>{text}</span>
      <span className="cursor" />
    </div>
  );
};
