
let initialState = {
    cart: [],
    cartIsOpen:false,
  };

  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD-TO-CART":
        return {...state, cart:[...state.cart, {...action.payload,count:1}]}
        
      case "OPEN-CART":
        return {...state, cartIsOpen:!state.cartIsOpen}
  
      case "COUNT-INCREMENT":
        return  {...state, cart:state.cart.map(el => el.id === action.id ? {...el,count:el.count+1} : el)}
      case "COUNT-DECREMENT":
        return  {...state, cart:state.cart.map(el => el.id === action.id ? {...el, count:(el.count-1>1 ? el.count-1 : 1)} : el)}
        
      case "DELETE-PRODUCT":
        return  {...state, cart:state.cart.map(el => el.id === action.id ? {...el, count:(el.count-1>1 ? el.count-1 : 1)} : el)}
        
  
      default:
        return state;
    }
  }

  
  export default cartReducer