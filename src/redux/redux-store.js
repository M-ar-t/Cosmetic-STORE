import {createStore,combineReducers,} from "redux";
import mainReducer from "./ShopAllReducer";
import cartReducer from "./CartReducer";
import navReducer from "./NavReducer";
import BlogReducer from "./BlogReducer";
import accountReducer from "./AccountReducer";


let reducers = combineReducers({
    main: mainReducer,
    cart:cartReducer,
    nav:navReducer,
    blog:BlogReducer,
    account:accountReducer
})

const store = createStore(reducers);

export default store;