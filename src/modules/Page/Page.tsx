/* eslint-disable no-console */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Block } from '../Block';
import { Burger } from '../Burger';
import { Header } from '../Header';
import catsFromServer from '../../api/cats.json';
import { Banner } from '../Banner';

export const Page: React.FC = () => {
  const { hash } = useLocation();

  const isMenuVisible = hash.includes('#menu');

  if (isMenuVisible) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }

  return (
    <div className="page__body">
      <Banner />

      <Header />

      <Burger isVisible={isMenuVisible} />

      <Block cats={catsFromServer} />
    </div>
  );
};
