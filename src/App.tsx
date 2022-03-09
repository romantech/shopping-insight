import React from 'react';
import styled from 'styled-components/macro';
import ShoppingInsight from 'pages/ShoppingInsight';

export default function App(): JSX.Element {
  return (
    <StyledWrapper>
      <ShoppingInsight />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.main`
  width: 100vw;
  min-height: 100vh;
`;
