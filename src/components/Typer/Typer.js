// @flow
import * as React from 'react';
import './Typer.css';

export const Typer = () => {
  const finishedText = 'Hi. I am Andreas Savva, a Front-End developer.';
  const [text, setText] = React.useState('');
  const [isErasing, setIsErasing] = React.useState(false);

  React.useEffect(() => {
    if (text !== finishedText && !isErasing) {
      setTimeout(() => setText(`${text}${finishedText[text.length]}`), 200);
    } else if (text === finishedText && !isErasing) {
      setTimeout(() => setIsErasing(true), 3000);
    } else if (text.length !== 0 && isErasing) {
      setTimeout(() => setText(text.substring(0, text.length - 1)), 50);
    } else if (text.length === 0 && isErasing) {
      setTimeout(() => setIsErasing(false), 1000);
    }
  }, [text, isErasing]);

  return (
    <div className="container">
      <span>{text}</span>
      <span className="cursor" />
    </div>
  );
};
