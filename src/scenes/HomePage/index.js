// @flow strict
import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'themes/default';

import hiCat from 'static/images/hi.gif';

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const HiImage = styled.img`
  margin-top: 20px;
`;

WelcomeText.defaultProps = {
  theme: defaultTheme,
};

const HomePage = () => (
  <Container>
    <WelcomeText>Oh hai</WelcomeText>
    <HiImage src={hiCat} alt="Hi" />
  </Container>
);

export default HomePage;
