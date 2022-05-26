import React from 'react'
import styled from 'styled-components'

const StyledMenuButton = styled.button`
// set the button width so we can calc() it into the middle of the page easily
    --menuButtonWidth: 5rem;
    --menuButtonHeight: 5rem;

    width: var(--menuButtonWidth);
    height: var(--menuButtonHeight);
    display: block;
    position: fixed;
    z-index: 1;

    border-radius: var(--menuButtonWidth);
    border: 5px solid #444;
    bottom: 2rem;
    left: calc(50vw - var(--menuButtonWidth) / 2);


    // More than 1 player and not in landscape
    &:not(.playerCount1).landscapeModefalse {
        top: calc(50vh - var(--menuButtonHeight) / 2);
        left: calc(50vw - var(--menuButtonWidth) / 2);
    }
    // More than 1 player and in landscapeMode
    &:not(.playerCount1).landscapeModetrue {
        top: calc(50vw - var(--menuButtonHeight) / 2);
        left: calc(50vh - var(--menuButtonWidth) / 2);
    }
    
    svg{
        margin-top: 0.1rem;
        fill: #444;
    }


`
export const MenuButton = (props) => {

    return (
        <StyledMenuButton className={props.className} onClick={props.onClick}>
            <svg viewBox="0 0 100 80" width="25" height="25">
                <rect width="100" height="15"></rect>
                <rect y="30" width="100" height="15"></rect>
                <rect y="60" width="100" height="15"></rect>
            </svg>
        </StyledMenuButton>
    )
}


