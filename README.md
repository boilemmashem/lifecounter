![Preview screenshot](/src/img/preview.png)

# LifeCounter

https://mtglifecounter.netlify.app

A small web application to keep track of your life total during a game of [Magic the Gathering](https://en.wikipedia.org/wiki/Magic:_The_Gathering). Built using `create react app`.

## Features
- 1-4 Players
- Dynamic layout depending on number of players
- Add/remove life total with a tap
  - Long press to add/remove 10 at once ([custom hook](./src/hooks/use-long-press.js))
- Color generation & selection for each player
- Change player names
- Fulllscreen Mode
- Keep screen awake
- Landscape Mode

### Install
npm install

### Run
npm start

## Notes
To keep the screen awake the app uses [Wakelock browser api](https://web.dev/wake-lock/). To test locally start with `HTTPS=true npm start`.
