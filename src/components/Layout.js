import React from 'react';
import styled from '@emotion/styled';

import Header from './Header';
import Navigation from './Navigation';
import Wrapper from './Wrapper';

const StyledMain = styled.main`
  padding: 1em;
  @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    overflow-y: scroll;
  }
`;

export default ({ children, title = 'Notedly' }) => (
  <div>
    <Header />
    <Wrapper>
      <Navigation />
      <StyledMain>{children}</StyledMain>
    </Wrapper>
  </div>
);
