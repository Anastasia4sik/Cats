import React from 'react';
import { Burger } from '../Burger';
import { Header } from '../Header';

export const Page: React.FC = () => {
  return (
    <div className="page__body">
      <Header />
      <Burger />
    </div>
  );
};
