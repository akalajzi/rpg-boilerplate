// @flow strict
import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'themes/default';

const FullPageContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }: ThemeProps) => theme.colors.black};
  color: ${({ theme }: ThemeProps) => theme.colors.white};
`;

FullPageContainer.defaultProps = {
  theme: defaultTheme,
};

const GiantText = styled.div`
  align-items: center;
  justify-content: center;
  font-size: 144px;
`;

const BadUrlPage = () => (
  <FullPageContainer>
    <GiantText>404</GiantText>
  </FullPageContainer>
);

export default BadUrlPage;
