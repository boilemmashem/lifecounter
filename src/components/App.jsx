import React, {useState} from 'react'
import styled from 'styled-components'
import { Player } from './Player';
import { Menu } from './Menu';

export const SettingsContext = React.createContext();


const StyledApp = styled.div`
`
export function App() {

  // Pull in settingsObj from localStorage
  // This contains the state values from previous session
  const settingsObj = JSON.parse(localStorage.getItem('settingsObj'));

  // Hook contexts for settings
  // Pull in settings from localstorage as the initial value
  const [lifeTotal, setLifeTotal] = useState(settingsObj.lifeTotal ? settingsObj.lifeTotal: 20);
  const [playerCount, setPlayerCount] = useState(settingsObj.playerCount ? settingsObj.playerCount: 1);

  const makePlayers = (numOfPlayers) => {
    let playersArr = [];
    for(let i = 1; i <= numOfPlayers; i++) {
      playersArr.push(
        <Player
          lifeTotal={lifeTotal}
          defaultPlayerName={`Player ${i}`}
          key={`player${i}`}
        />
      )
    }
    return playersArr;
  }


  return (
    <StyledApp>
      <SettingsContext.Provider value={{lifeTotal, setLifeTotal, playerCount, setPlayerCount}}>
        <Menu/>
      </SettingsContext.Provider>
      {makePlayers(playerCount)}
    </StyledApp>
  );
}
