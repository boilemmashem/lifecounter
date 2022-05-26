import React from 'react'
import styled from 'styled-components'

const StyledMenuButton = styled.button`
// set the button width so we can calc() it into the middle of the page easily
    --menuButtonWidth: 3rem;
    --menuButtonHeight: 3rem;

    width: var(--menuButtonWidth);
    height: var(--menuButtonHeight);
    display: block;
    position: fixed;
    z-index: 1;
    &.landscapeModefalse{
        top: calc(50vh - var(--menuButtonHeight) / 2);
        left: calc(50vw - var(--menuButtonWidth) / 2);
    }

    &.landscapeModetrue {
        background: red;
    }
`
export const MenuButton = (props) => {

    return (
        <StyledMenuButton className={`${props.className} landscapeMode${props.landscapeMode}`} onClick={props.onClick}>m</StyledMenuButton>
    )
}


