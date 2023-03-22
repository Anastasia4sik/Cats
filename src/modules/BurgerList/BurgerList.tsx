import React from 'react';
import { Link } from 'react-router-dom';

export const BurgerList: React.FC = () => (
  <ul className="menu__list">
    {['Home', 'Milka', 'Oskar', 'Nala', 'Sheldon'].map(item => (
      <li key={item} className="menu__item">
        <Link to={`#${item}`} className="menu__link">
          {item}
        </Link>
      </li>
    ))}
  </ul>
);
