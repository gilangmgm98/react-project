import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"

import thunk from "redux-thunk"
import categoryReducer from "../reducers/categoryReducer";
import foodReducer from "../reducers/foodReducer";

const rootReducer = combineReducers({
    food: foodReducer,
    category: categoryReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
