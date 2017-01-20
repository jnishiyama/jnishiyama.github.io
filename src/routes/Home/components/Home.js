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

const getNewPosition = (position) => {
  // console.log(position)
  // if (position == 0) {
  const min = Math.ceil(-50)
  const max = Math.floor(50)
  const rand = Math.floor(Math.random() * (max - min)) + min
  return rand
  // }
  // else {
  //   return 0
  // }

}

const goose = "Goose Bonestanley".split('')

const state = {}

for (let i in goose) {state[i] = {x: 0, y: 0} }

export const Home = (props) => (
  <FlexBox>
    <Wrapper onClick={()=>props.rewind()}>
      <Title>
        {
          goose.map((e, index) => (
            <Motion 
              key={index}
              style={
                {
                  x: spring(props.ui[index].x),
                  y: spring(props.ui[index].y)
                }
            }>
              {
                ({x, y}) =>
                <span 
                  key={index} 
                  style={{
                    WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
                    transform: `translate3d(${x}px, ${y}px, 0)`,
                    display: `inline-block`
                  }}
                  onMouseEnter={
                    () => (
                      props.updateUI(
                        `${index}`,
                        {
                          x: getNewPosition(props.ui[index].x),
                          y: getNewPosition(props.ui[index].y)
                        }
                      )
                    )
                }>
                  {e}
                </span>
              }
            </Motion>
          ))
        }
      </Title>
    </Wrapper>
  </FlexBox>
)

export default ui({ state: state })(Home)
