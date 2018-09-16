// @flow strict
import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'themes/default';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

const WelcomeText = styled.div`
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }: ThemeProps) => theme.colors.orange};
`;

WelcomeText.defaultProps = {
  theme: defaultTheme,
};

const HomePage = () => (
  <Container>
    <WelcomeText>Oh hai</WelcomeText>
  </Container>
);

export default HomePage;
