/* eslint-disable import/no-unresolved */
import React from 'react';
import classname from 'classnames';
import arrow from '../../../images/icon/arrow.png';

type Props = {
  rotate: number,
  isUp: boolean,
};

export const Arrow: React.FC<Props> = ({ rotate, isUp }) => (
  <a href="#Home">
    <img
      src={arrow}
      alt="Arrow"
      className={classname(
        'arrow',
        { arrow__up: isUp },
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  </a>
);
