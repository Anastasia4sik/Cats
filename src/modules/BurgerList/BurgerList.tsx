import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cat } from '../../types/Cat';

type Props = {
  cats: Cat[];
};

export const BurgerList: React.FC<Props> = ({ cats }) => {
  return (
    <ul className="menu__list">
      {cats.map(cat => (
        <li key={cat.slug} className="menu__item">
          <NavLink to={`#${cat.slug}`} className="menu__link">
            {cat.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
