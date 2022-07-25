import React from 'react'
import styled from 'styled-components'
import radium from 'radium'

function App() {

  return <div>

    <StyledCom />

    <RadiumComRender />

  </div>
}

function StyledCom() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Wrapper = styled.div`
    padding: 4em;
    background: papayawhip;
  `;

  return <div>

    <Wrapper>
      <Title>Css in js. styled-components</Title>
    </Wrapper>

  </div>
}

function RadiumCom() {
  const style = {
    div: {
      padding: '4em',
      background: 'gray'
    },
    h1: {
      fontSize: '1.5em',
      textAlign: 'center',
      color: 'white',
      ':hover': {
        color: 'green'
      }
    }
  }

  return <div>

    <div style={style.div}>
      <h1 style={style.h1}>Css in js. radium</h1>
    </div>

  </div>
}

const RadiumComRender = radium(RadiumCom)

export default App