import React from 'react';
import styled from 'styled-components/macro';

function App(): JSX.Element {
  return (
    <StyledWrapper>
      <h1>helloWorld</h1>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: lightgray;
`;

export default App;
