import React from 'react'
import styled from 'styled-components'

function App() {

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

export default App