import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Page } from './modules/Page';
import './index.scss';

export const App = () => {
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('page__body--with-menu');
    } else {
      document.body.classList.remove('page__body--with-menu');
    }
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Page />
      </div>
    </BrowserRouter>
  );
};
