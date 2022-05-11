import React, {useState} from 'react'
import styled from 'styled-components'
// import { Player } from './Player';
// import { Settings } from './Settings';
import { Menu } from './Menu';

export const SettingsContext = React.createContext();


const StyledApp = styled.div`
`
export function App() {

  // Hook contexts for settings
  // Pull in settings from localstorage as the initial value
  const [lifeTotal, setLifeTotal] = useState(localStorage.getItem('lifeTotal') ? localStorage.getItem('lifeTotal'): 20);
  const [playerCount, setPlayerCount] = useState(localStorage.getItem('playerCount') ? localStorage.getItem('playerCount'): 1);


  return (
    <StyledApp>
      <SettingsContext.Provider value={{lifeTotal, setLifeTotal, playerCount, setPlayerCount}}>
        <Menu/>
      </SettingsContext.Provider>
    </StyledApp>
  );
}
