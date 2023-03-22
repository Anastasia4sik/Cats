import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../shared/Button';

export const Banner: React.FC = () => {
  return (
    <Link
      to="https://google.com"
      target="_blank"
    >
      <div className="banner">
        <h2 className="banner__title">
          Here you can learn more about cats.
        </h2>

        <Button link="https://google.com" text="Tap here" />
      </div>
    </Link>
  );
};
