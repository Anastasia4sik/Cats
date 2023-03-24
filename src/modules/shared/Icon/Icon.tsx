import React from 'react';
import { Link } from 'react-router-dom';

export const Icon: React.FC = () => (
  <>
    <Link to="tel:+380506105285" className="icon icon--call">
      <div className="icon__tooltip">
        +380506105285
      </div>
    </Link>

    <Link
      to="#menu"
      className="icon icon--menu"
    />
  </>
);
