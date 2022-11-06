// Suppose we have more than one reducers, then we may want to combine all the reducers into a single reducer and export it
// combineReducers : Turns an object whose values are different reducer functions, into a single reducer function.
import { combineReducers } from "redux";
import amountReducers from "./amountReducers";

const reducers = combineReducers({
    amount : amountReducers
    // we can add more comma Separated reducers to combine theme here
})

export default reducers