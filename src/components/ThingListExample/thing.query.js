// @flow strict

import gql from 'graphql-tag';

const GET_THINGS = gql`
  query Thing {
    allThings {
      id
      name
    }
  }
`;

export default GET_THINGS;
