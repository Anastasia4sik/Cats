import React from 'react';
import { Arrow } from '../shared/Arrow/Arrow';
import { Button } from '../shared/Button';
import { Icon } from '../shared/Icon';
import { Logo } from '../shared/Logo';

export const Header: React.FC = () => (
  <header id="Home" className="main-container header">
    <div className="container">
      <div className="header__content">
        <div className="header__top">
          <Logo />
          <Arrow rotate={90} isUp={false} />

          <div className="header__nav-icons">
            <Icon />
          </div>
        </div>

        <h1 className="header__title">
          Choose the cat!
        </h1>

        <Button
          link="https://www.youtube.com/watch?v=IeGD4UK2YmU&t=2s"
          text="Tap here"
        />
      </div>
    </div>
  </header>
);
