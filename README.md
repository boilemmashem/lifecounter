# TODO
Fullscreen Mode:
    - Add keybind for escape, and F11 to come out of FS mode
    - Browser tool can be used to exit fullscreen. When settings are opened add a check to ensure fullscreen wasnt disabled
        - test: enable FS mode, exit using browser tools, reopen settings
Landscape Mode
    - Already added dynamic class to the main playerArea
    - Add in some styling based on the dynamic class

## Notes
[Wakelock browser api](https://web.dev/wake-lock/) (to keep the screen awake) is only available through HTTPS, to test locally start with `HTTPS=true npm start`.