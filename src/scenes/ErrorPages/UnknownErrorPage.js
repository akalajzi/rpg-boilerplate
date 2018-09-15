// @flow strict

import React from "react"
import styled from "styled-components"

type Props = {
  title?: React$Node,
  description?: React$Node,
};

const ErrorPageWrapper = styled.div``

const Title = styled.div``

const Description = styled.div``

const UnknownErrorPage = ({title, description}: Props) => {
  return(
    <ErrorPageWrapper>
      <Title>{title || "Something went wrong"}</Title>
      <Description>{description}</Description>
    </ErrorPageWrapper>
  )
}

export default UnknownErrorPage;
