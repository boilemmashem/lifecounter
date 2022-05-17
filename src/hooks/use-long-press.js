import {useRef} from "react";

export function useLongPress({onClick, onLongPress} = {}) {
    const timerRef = useRef();
    const isLongPress = useRef(false);

    function handleOnClick() {
        console.log('handleOnClick');
        if (isLongPress.current) {
            return;
        }
        if(typeof onClick === 'function') {
            onClick();
        }
    }
    function handleLongPress() {
        console.log('it\'s a long press')
        if(typeof onLongPress === 'function') {
            onLongPress();
        }
    }
    function handleOnMouseDown() {
        startPressTimer();
        console.log('handleOnMouseDown');
    }
    function handleOnMouseUp() {
        console.log('handleOnMouseUp');
        clearTimeout(timerRef.current)
    }
    function handleOnTouchStart() {
        startPressTimer();
        console.log('handleOnTouchStart');
    }
    function handleOnTouchEnd() {
        console.log('handleOnTouchEnd');
        clearTimeout(timerRef.current)
    }

    function startPressTimer() {
        isLongPress.current = false;
        timerRef.current = setTimeout(() => {
            // longpress is activated
            handleLongPress();
            isLongPress.current = true;
        }, 500)
    }


    return {
        btnHandlers: {
            onClick: handleOnClick,
            onLongPress: handleLongPress,
            onMouseDown: handleOnMouseDown,
            onMouseUp: handleOnMouseUp,
            onTouchStart: handleOnTouchStart,
            onTouchEnd: handleOnTouchEnd
        }
    }
}