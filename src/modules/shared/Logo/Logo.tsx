import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => (
  <Link
    to="/"
    className="logo"
  >
    <img
      className="logo__img"
      src="../../../images/logo.png"
      alt="Cat"
    />
  </Link>
);
