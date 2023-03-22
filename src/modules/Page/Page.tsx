import React from 'react';
import { Header } from '../Header';

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
    </div>
  );
};
