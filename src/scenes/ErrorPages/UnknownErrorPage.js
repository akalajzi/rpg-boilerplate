// @flow strict

import React from 'react';
import styled from 'styled-components';

type Props = {
  title?: React$Node,
  description?: React$Node,
};

const ErrorPageWrapper = styled.div``;

const Title = styled.div``;

const Description = styled.div``;

const UnknownErrorPage = ({ title, description }: Props) => (
  <ErrorPageWrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </ErrorPageWrapper>
);

UnknownErrorPage.defaultProps = {
  title: 'Something went wrong',
  description: '',
};

export default UnknownErrorPage;
