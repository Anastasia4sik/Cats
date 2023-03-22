import React from 'react';
import { Link } from 'react-router-dom';
import { BurgerList } from '../BurgerList/BurgerList';
import { Logo } from '../shared/Logo';

export const Burger:React.FC = () => (
  <nav className="page__menu menu" id="menu">
    <div className="container">
      <div className="menu__content">
        <div className="menu__top">
          <Logo />

          <Link to="/" className="icon icon--cross"></Link>
        </div>

        <BurgerList />

        <div className="menu__call-container">
          <Link
            to="+1 234 5555-55-55"
            className="
                menu__call
                menu__call--phone"
          >
            +1 234 5555-55-55
          </Link>

          <Link
            to="+1 234 5555-55-55"
            className="
                menu__call
                menu__call--action"
          >
            Book Link test ride
          </Link>
        </div>
      </div>
    </div>
  </nav>
);
