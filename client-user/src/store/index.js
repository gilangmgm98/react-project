import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"

import thunk from "redux-thunk"
import detailReducer from "../reducers/detailReducer";
import foodReducer from "../reducers/foodReducer";

const rootReducer = combineReducers({
    food: foodReducer,
    detailFood: detailReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
