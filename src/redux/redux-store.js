import {createStore,combineReducers,} from "redux";
import mainReducer from "./ShopAllReducer";
import cartReducer from "./CartReducer";
import navReducer from "./NavReducer";
import BlogReducer from "./BlogReducer";


let reducers = combineReducers({
    main: mainReducer,
    cart:cartReducer,
    nav:navReducer,
    blog:BlogReducer
})

const store = createStore(reducers);

export default store;