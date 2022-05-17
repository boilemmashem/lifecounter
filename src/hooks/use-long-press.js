import {useRef} from "react";

export function useLongPress({onClick, onLongPress} = {}) {
    const timerRef = useRef();
    const isLongPress = useRef(false);

    function handleOnClick() {
        if (isLongPress.current) {
            return;
        }
        if(typeof onClick === 'function') {
            onClick();
        }
    }
    function handleLongPress() {
        if(typeof onLongPress === 'function') {
            onLongPress();
        }
    }
    function handleOnMouseDown() {
        startPressTimer();
    }
    function handleOnMouseUp() {
        clearTimeout(timerRef.current)
    }
    function handleOnTouchStart() {
        startPressTimer();
    }
    function handleOnTouchEnd() {
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
            onMouseDown: handleOnMouseDown,
            onMouseUp: handleOnMouseUp,
            onTouchStart: handleOnTouchStart,
            onTouchEnd: handleOnTouchEnd
        }
    }
}