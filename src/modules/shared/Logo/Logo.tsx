import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

export const Logo: React.FC = () => (
  <Link
    to="#Home"
    className="logo"
  >
    <img
      className="logo__img"
      src={logo}
      alt="Cat"
    />
  </Link>
);
