import React from 'react'
import styled from 'styled-components'

export const SettingsContext = React.createContext();


const StyledApp = styled.div`
`
export function App() {
  return (
    <StyledApp>
      Hello, World!
    </StyledApp>
  );
}
