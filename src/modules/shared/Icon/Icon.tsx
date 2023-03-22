import React from 'react';
import { Link } from 'react-router-dom';

export const Icon: React.FC = () => (
  <>
    <Link to="tel:+12 345 678-90-12" className="icon icon--call">
      <div className="icon__tooltip">
        +12 345 678-90-12
      </div>
    </Link>

    <Link
      to="#menu"
      className="icon icon--menu"
    />
  </>
);
