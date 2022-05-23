import colors from '../data/colors'

// Return a random color value from colors.json 
export const getRandomColor = () => {
    const colorValues = Object.values(colors)
    const numOfColors = Object.keys(colors).length
    function getRandomIntInclusive(min, max) { // from MDN docs
        min = Math.ceil(min);
        max = Math.floor(max - 1); // -1 is needed here since colors is 0 indexed
        return Math.floor(Math.random() * (max - min + 1) + min);; //The maximum is inclusive and the minimum is inclusive
    }
    return colorValues[getRandomIntInclusive(0, numOfColors)]
}