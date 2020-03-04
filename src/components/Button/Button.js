// @flow
import * as React from 'react';
import './Button.css';

type Props = {|
  text: string,
  scroll: ?number,
  border?: boolean
|};

export const Button = (props: Props) => {
  const { text, scroll, border } = props;

  const scrollTo = () => {
    window.scrollTo({
      top: scroll,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollTo}
      className="button"
      style={border && { border: '2px solid white' }}
    >
      {text}
    </button>
  );
};
