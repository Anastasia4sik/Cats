import React from 'react';
import { Cat } from '../../types/Cat';

type Props = {
  cats: Cat[];
};

export const BurgerList: React.FC<Props> = ({ cats }) => {
  return (
    <ul className="menu__list">
      {cats.map(cat => (
        <li key={cat.slug} className="menu__item">
          <a href={`#${cat.slug}`} className="menu__link">
            {cat.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
