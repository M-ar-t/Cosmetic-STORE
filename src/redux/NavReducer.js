let initialState = {
    isInput: false
  };

  
  export const navReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SHOW-INPUT":
        return {...state, isInput: !state.isInput}
    
      default:
        return state;
    }
  }

  
  export default navReducer