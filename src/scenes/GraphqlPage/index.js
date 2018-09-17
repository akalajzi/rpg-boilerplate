// @flow strict
import React from 'react';
import styled from 'styled-components';

import ThingListExample from 'components/ThingListExample';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const GraphqlPage = () => (
  <Container>
    <Title>Fetched from graph.cool:</Title>
    <ThingListExample />
  </Container>
);

export default GraphqlPage;
