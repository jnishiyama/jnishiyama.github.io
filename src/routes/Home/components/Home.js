import React from 'react'
import styled from 'styled-components'
import ui from 'redux-ui'
import { Motion, spring } from 'react-motion'

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
  width: 350px;
`

const Righto = styled.section`
  background: white;
  position: fixed;
  right: 0;
  display: block;
  text-align: center;
  padding: 20px;
  width: 200px;
  height: 100%;
  overflow-y: scroll;
`

const Title = styled.h1`
  color: black;
`

const getNewPosition = (position) => {
  const min = Math.ceil(-50)
  const max = Math.floor(50)
  const rand = Math.floor(Math.random() * (max - min)) + min
  return rand
}

const goose = 'Goose Bonestanley'.split('')

const state = {}

for (let i in goose) {
  state[i] = { x: 0, y: 0 }
}

export const Home = (props) => (
  <FlexBox>
    <Wrapper onClick={() => props.rewind()}>
      <Title>
        {
          goose.map((e, index) => (
            <Motion
              key={index}
              style={{
                x: spring(props.ui[index].x),
                y: spring(props.ui[index].y)
              }}
            >
              {
                ({ x, y }) =>
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
                    {e === ' ' ? <span>&nbsp;</span> : e}
                  </span>
              }
            </Motion>
          ))
        }
      </Title>
    </Wrapper>
    <Righto>
      {
        props.actionLog.map(
          (e, index) => (
            <div key={index}>
              <span>Letter: {goose[e.payload.name]}</span>
              <span>X: {e.payload.value.x}</span>
              <span>Y: {e.payload.value.y}</span>
            </div>
          )
        )
      }
    </Righto>
  </FlexBox>
)

Home.propTypes = {
  actionLog : React.PropTypes.array.isRequired
}

export default ui({ state: state })(Home)
