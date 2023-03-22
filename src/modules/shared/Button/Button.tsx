import React from 'react';

type Props = {
  link: string,
  text: string,
};

export const Button: React.FC<Props> = ({ link, text }) => (
  <button
    type="button"
    onClick={(event) => {
      event.preventDefault();
      window.open(
        link,
        '_blank',
      );
    }}
    className="button"
  >
    {text}
  </button>
);
