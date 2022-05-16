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
        let colorOptions = []
        for(let i = 0; i < numberOfColors; i++ ) {
            colorOptions.push(
                <button 
                    className='colorOption' 
                    key={`color${i}`} 
                    style={{background: Object.values(colors)[i][0]}}
                    value={Object.values(colors)[i][0]}
                    onClick={(e) => {
                        props.setPlayerBGColor(e.target.value); // Set player's background
                        props.toggleOpen(); // Close color selection
                    }}
                >
                        {Object.values(colors)[i][0]}
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