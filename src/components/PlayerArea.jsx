import React from 'react'
import styled from 'styled-components'
import {Player} from './Player'
import { getRandomColor } from '../helpers/getColor'




const StyledPlayerArea = styled.main`
    
    `
export const PlayerArea = (props) => {
    
    const addPlayers = (playerCount) => {
        let playersArr = []
        let chosenColors = []
    
        const getNewPlayerColor = () => {
          let newColor = getRandomColor();
          // If newColor has already been chosen, execute a recursive call to select another
          if(chosenColors.includes(newColor[0])) {
            return getNewPlayerColor();
          }
          // colour has not been selected before so push it to the list and return it
          chosenColors.push(newColor[0]);
          return newColor;
        }
    
        for(let i = 1; i <= playerCount; i++) {
          
          playersArr.unshift(
            <Player
            startingLifeTotal={props.startingLifeTotal} 
            defaultPlayerName={`Player ${i}`}
            playerNo={i}
            playerColors={getNewPlayerColor()}
            key={`player${i}`} 
            />
            )
          }
        return playersArr;
    }


    return (
        <StyledPlayerArea>
            {addPlayers(props.playerCount)}
        </StyledPlayerArea>
    )
}

