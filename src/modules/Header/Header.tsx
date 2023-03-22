import React from 'react';
import { Icon } from '../shared/Icon';
import { Logo } from '../shared/Logo';

export const Header: React.FC = () => (
  <header className="header">
    <div className="container">
      <div className="header__content">
        <div className="header__top">
          <Logo />

          <div className="header__nav-icons">
            <Icon />
          </div>
        </div>

        <h1 className="header__title">
          Meow the Cat
        </h1>
      </div>
    </div>
  </header>
);
