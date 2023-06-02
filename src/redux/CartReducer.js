
let initialState = {
    cart: [],
    cartIsOpen:false,
    cartIsEmpty:true,
    totalSum:0
  };

  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD-TO-CART":
        return {...state, cart:(state.cart.filter(el => el.id === action.payload.id).length>0 ? 
          state.cart.map(el => el.id === action.payload.id ? {...el,count:el.count+1} : el) :
            [...state.cart, {...action.payload,count:1}] )} 
        
      case "OPEN-CART":
        return {...state, cartIsOpen:!state.cartIsOpen}

      case "EMPTY-CART":
        return {...state, cartIsEmpty:action.payload}
  
      case "COUNT-INCREMENT":
        return  {...state, cart:state.cart.map(el => el.id === action.id ? {...el,count:el.count+1} : el)}
      case "COUNT-DECREMENT":
        return  {...state, cart:state.cart.map(el => el.id === action.id ? {...el, count:(el.count-1>1 ? el.count-1 : 1)} : el)}
        
      case "DELETE-PRODUCT":
        return  {...state, cart:state.cart.filter(el => el.id !== action.id )}
      case "TOTAL-SUM":
        const currentPrice = (Number(action.payload.replace(' ','')))
        return {...state, totalSum:state.totalSum + currentPrice}
      case "TOTAL-SUM-DEC":  
        const currentPriceDec = (Number(action.payload.price.replace(' ','')))
        return {...state, totalSum:(state.cart.filter(el => action.payload.id ===el.id)[0].count>1 ?
          (state.totalSum - currentPriceDec) : state.totalSum )}
      case "TOTAL-SUM-DEC-ALL":  
        return {...state, totalSum:(state.totalSum - action.payload.priceReady)}
        
      default:
        return state;
    }
  }

  
  export default cartReducer