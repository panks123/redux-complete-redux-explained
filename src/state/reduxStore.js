// Creating a redux store 

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store = createStore(reducers, {}, applyMiddleware(thunk))

// In Redux, middleware provides a way to interact with actions that have been dispatched to the store before they 
// reach the store’s reducer. Here we are using 'redux-thunk'