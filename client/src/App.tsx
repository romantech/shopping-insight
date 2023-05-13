import React from 'react';
import styled from 'styled-components/macro';
import ShoppingInsight from 'pages/ShoppingInsight';
import { Analytics } from '@vercel/analytics/react';

export default function App(): JSX.Element {
  return (
    <StyledWrapper>
      <ShoppingInsight />
      <Analytics />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.main`
  width: 100vw;
  height: 100vh;
`;
