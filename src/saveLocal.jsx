// A helper function to store values in localStorage settingsObj.

export const saveLocal = (key, value) => {
   let saveLocalObj = JSON.parse(localStorage.getItem('settingsObj'));
   if(saveLocalObj === null) { saveLocalObj = {} }

   saveLocalObj[key] = value
   window.localStorage.setItem('settingsObj', JSON.stringify(saveLocalObj))
}