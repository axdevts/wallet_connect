import React from 'react';
import { TokenHolderLayout } from '../../layouts';
import { HomeWrapper } from './style';

const Homepage = () => {
  return (
    <TokenHolderLayout pageTitle="Homepage">
      <HomeWrapper>
        <h1>Hello</h1>
      </HomeWrapper>
    </TokenHolderLayout>
  );
};

export default Homepage;
