/* eslint-disable no-console */
import React, { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Block } from '../Block';
import { Header } from '../Header';
import { Banner } from '../Banner';
import { Arrow } from '../shared/Arrow';
import { Cat } from '../../types/Cat';
import { getCats } from '../../helpers/api';
import { Burger } from '../Burger';

export const Page: React.FC = memo(() => {
  const [cats, setCats] = useState<Cat[]>([]);

  const { hash } = useLocation();

  const isMenuVisible = hash.includes('#menu');

  if (isMenuVisible) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }

  useEffect(() => {
    getCats().then(data => {
      setCats(data);
    });
  }, []);

  return (
    <div className="page__body">

      <Header />

      <Burger isVisible={isMenuVisible} />

      <Banner />

      <Block cats={cats} />

      <Arrow rotate={270} isUp />
    </div>
  );
});
