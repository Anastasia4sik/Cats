import React from 'react';
import { Link } from 'react-router-dom';
import { Cat } from '../../types/Cat';

type Props = {
  cats: Cat[];
};

export const BurgerList: React.FC<Props> = ({ cats }) => {
  return (
    <ul className="menu__list">
      {cats.map(cat => (
        <li key={cat.slug} className="menu__item">
          <Link to={`#${cat.slug}`} className="menu__link">
            {cat.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
