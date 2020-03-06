// @flow
import * as React from 'react';
import './Typer.css';

export const Typer = () => {
  const finishedText =
    'Hi. 👋 I am Andreas Savva.\nA Front-End developer. 🤓\n\nI am passionate 🔥 about building web and mobile apps. 🚀\n';
  const [text, setText] = React.useState('');
  const [isErasing, setIsErasing] = React.useState(false);

  const emojiRegex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

  const checkIfEmoji = (startIndex: number, endIndex: number): boolean =>
    !!finishedText.substring(startIndex, endIndex).match(emojiRegex);

  React.useEffect(() => {
    if (text !== finishedText && !isErasing) {
      let waitTime = 100;
      if (
        text.length >= 1 &&
        finishedText.charAt(text.length - 1) === '\n' &&
        finishedText.charAt(text.length) !== '\n'
      ) {
        waitTime = 1500;
      }
      setTimeout(
        () =>
          setText(
            finishedText.substring(
              0,
              checkIfEmoji(text.length, text.length + 2)
                ? text.length + 2
                : text.length + 1
            )
          ),
        waitTime
      );
    } else if (text === finishedText && !isErasing) {
      setTimeout(() => setIsErasing(true), 3000);
    } else if (text.length !== 0 && isErasing) {
      setTimeout(
        () =>
          setText(
            text.substring(
              0,
              checkIfEmoji(text.length - 2, text.length)
                ? text.length - 2
                : text.length - 1
            )
          ),
        25
      );
    } else if (text.length === 0 && isErasing) {
      setTimeout(() => setIsErasing(false), 1000);
    }
  }, [text, isErasing]);

  return (
    <div className="container">
      {text}
      <span className="cursor" />
    </div>
  );
};
