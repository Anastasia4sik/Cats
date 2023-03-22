import React from 'react';
import { Cat } from '../../types/Cat';
import { BlockItem } from '../BlockItem';

type Props = {
  cats: Cat[];
};

export const Block: React.FC<Props> = ({ cats }) => {
  return (
    <div className="container main-container">
      {cats.map(cat => (
        <BlockItem key={cat.slug} cat={cat} />
      ))}
    </div>
  );
};
