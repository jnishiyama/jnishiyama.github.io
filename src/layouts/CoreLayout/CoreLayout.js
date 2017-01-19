import React from 'react'
import '../../styles/core.scss'
import styled from 'styled-components'

const Wrapper = styled.section`
  height: 100%;
  background: black;
`

const RouteWrapper = styled.section`
  height: 100%;
`

export const CoreLayout = ({ children }) => (
  <Wrapper>
    <RouteWrapper>
      {children}
    </RouteWrapper>
  </Wrapper>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
