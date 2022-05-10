import React, {useState} from 'react'
import styled from 'styled-components'
// import { Player } from './Player';
// import { Settings } from './Settings';
import { Menu } from './Menu';

const StyledApp = styled.div`
`

function App() {

  // const [lifeTotal, setLifeTotal] = useState(0);
  const [playerCount, setPlayerCount] = useState(1);

  return (
    <StyledApp>
      <Menu playerCount={playerCount} setPlayerCount={setPlayerCount}/>
    </StyledApp>
  );
}

export default App;
