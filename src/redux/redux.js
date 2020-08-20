import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//All reducers import
import OrdersReducer from "./Orders/orders";

//Root reducer
const rootReducer = combineReducers({
    orders: OrdersReducer
});

//Redux DevTools configuration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}