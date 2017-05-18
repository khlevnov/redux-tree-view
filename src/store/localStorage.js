export const loadState = () => {
  try {
    const storedState = localStorage.getItem('state');
    if (storedState !== null) {
      console.log('loadState', storedState);
      return JSON.parse(storedState);
    }
  } catch (error) {
    return undefined;
  }
}

export const persistState = state => {
  try {
    const storedState = JSON.stringify(state);
    localStorage.setItem('state', storedState);
  } catch (error) {
    console.log(error);
  }
}
