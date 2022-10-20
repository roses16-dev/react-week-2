import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import todoList from '../modules/todoList'

const rootReducer = combineReducers({
    todoList:todoList

}, composeWithDevTools(applyMiddleware(thunk)))
const store = createStore(rootReducer)

export default store