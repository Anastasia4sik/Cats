import React from 'react';
import { Block } from '../Block';
import { Burger } from '../Burger';
import { Header } from '../Header';
import catsFromServer from '../../api/cats.json';

export const Page: React.FC = () => {
  return (
    <div className="page__body">
      <Header />
      <Burger />

      <Block cats={catsFromServer} />
    </div>
  );
};
