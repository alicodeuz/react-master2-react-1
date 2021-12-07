import React from 'react';
import FunctionalComponent from './FunctionalComponent';

function HeaderComponents() {
  const demo = 8880;
  return (
    <header>
      <h2>This is the header {demo}</h2>
      <FunctionalComponent />
    </header>
  )
};

export default HeaderComponents;