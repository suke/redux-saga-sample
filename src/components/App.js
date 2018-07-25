import React from 'react'
import styled from 'styled-components'
import Counter from '../containers/Counter'
import Github from '../containers/Github'

export default () => (
  <Wrapper>
    <Github />
  </Wrapper>
)

const Wrapper = styled.div`
  width: 960px;
  padding: 30px;
  margin: 0 auto;
`
