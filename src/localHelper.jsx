// A helper function to store values in localStorage settingsObj.
const saveLocal = (key, value) => {
   let saveLocalObj = JSON.parse(localStorage.getItem('settingsObj'));
   if(saveLocalObj === null) { saveLocalObj = {} }

   saveLocalObj[key] = value
   window.localStorage.setItem('settingsObj', JSON.stringify(saveLocalObj))
}

// Load dem values
const loadLocal = () => {
   if(JSON.parse(localStorage.getItem('settingsObj')) === null) {
      return {}
   }
   return JSON.parse(localStorage.getItem('settingsObj'))
};

export {saveLocal, loadLocal}