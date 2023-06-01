import {createStore,combineReducers,} from "redux";
import mainReducer from "./ShopAllReducer";
import cartReducer from "./CartReducer";


let reducers = combineReducers({
    main: mainReducer,
    cart:cartReducer
})

const store = createStore(reducers);

export default store;