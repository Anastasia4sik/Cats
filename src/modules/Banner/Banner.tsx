import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../shared/Button';
import arrow from '../../images/icon/arrow.png';

export const Banner: React.FC = () => {
  return (
    <div className="banner">
      <Link to="https://google.com">
        <h2 className="banner__title">
          Here you can learn more about cats.
        </h2>

        <Button link="https://google.com" text="Tap here" />
      </Link>

      <NavLink to="#Home">
        <img className="banner__arrow" src={arrow} alt="Arrow" />
      </NavLink>
    </div>
  );
};
