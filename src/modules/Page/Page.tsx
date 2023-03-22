import React from 'react';
import { Block } from '../Block';
import { Burger } from '../Burger';
import { Header } from '../Header';
import catsFromServer from '../../api/cats.json';

export const Page: React.FC = () => {
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('page__body--with-menu');
    } else {
      document.body.classList.remove('page__body--with-menu');
    }
  });

  return (
    <div className="page__body">
      <Header />
      <Burger />

      <Block cats={catsFromServer} />
    </div>
  );
};
