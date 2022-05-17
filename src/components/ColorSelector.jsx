import React, {useState } from 'react'
import styled from 'styled-components'
import Colors from '../data/colors.json'

const StyledColorSelector = styled.div`
    button {
        border: 2px solid rgba(255,255,255, 0.2);
        border-radius: 100rem;
    }
`
export const ColorSelector = (props) => {



    function addColorOptions(colors) {
        const numberOfColors = Object.values(colors).length
        const colorArr = Object.values(colors)
        let colorOptions = []
        for(let i = 0; i < numberOfColors; i++ ) {
            colorOptions.push(
                <button 
                    className='colorOption' 
                    key={`color${i}`} 
                    style={{background: colorArr[i][0]}}
                    value={[colorArr[i][0], colorArr[i][1]]}
                    onClick={(e) => {
                        props.setPlayerBGColor(e.target.value.substring(0,7)); // Set player's background: ;
                        props.setPlayerContrastColor(e.target.value.substring(8,12)) // set player's contrast color
                        props.toggleOpen(); // Close color selection
                    }}
                >
                        {colorArr[i][0]}
                </button>
            )
        }
        return colorOptions;
    }

    if(props.isOpen) {
        // If the colorSelector is open
        return (
            <StyledColorSelector>
                {addColorOptions(Colors)}
            </StyledColorSelector>
        )
    }

    return null
}