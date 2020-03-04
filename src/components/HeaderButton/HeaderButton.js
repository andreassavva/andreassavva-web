// @flow
import * as React from 'react';
import './HeaderButton.css';

type Props = {|
  text: string,
  scroll: ?number,
  border?: boolean
|};

export const HeaderButton = (props: Props) => {
  const { text, scroll, border } = props;

  const scrollTo = () => {
    window.scrollTo({
      top: scroll || 0,
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
