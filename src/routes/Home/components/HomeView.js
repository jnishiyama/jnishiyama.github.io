import React from 'react'
import styled from 'styled-components'
import ui from 'redux-ui';
import {Motion, spring} from 'react-motion';

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Wrapper = styled.section`
  background: white;
  display: block;
  text-align: center;
  padding: 20px;
  width: 300px;
`

const Title = styled.h1`
  color: black;
`

// const SpanRocket = styled.span`
//   WebkitTransform: translate3d(${x}px, 0, 0);
//   transform: translate3d(${x}px, 0, 0);
// `


export const HomeView = (props) => (
  <FlexBox>
    <Wrapper>
      <Title>
        <Motion style={{x: spring(props.ui.open ? 50 : 10), y: spring(props.ui.open ? 50 : 10)}}>
        {({x, y}) =>
          <span style={{
                WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
                transform: `translate3d(${x}px, ${y}px, 0)`,
                display: `inline-block`
              }}  onMouseEnter={()=>props.updateUI('open', !props.ui.open)}>A</span>
        }
        </Motion> 
        YD F
      </Title>
    </Wrapper>
  </FlexBox>
)

export default ui({ state: { open: false } })(HomeView)
