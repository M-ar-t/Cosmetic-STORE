let initialState = {
    
    accountIsOpen:false,

  };

  
  export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        
      case "OPEN-ACCOUNT":
        return {...state, accountIsOpen:!state.accountIsOpen}

      default:
        return state;
    }
  }

  
  export default accountReducer