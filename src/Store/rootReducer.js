import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/reducer';
import TodolistReducer from './Todolist/reducer'

const rootReducer = combineReducers({
    counter: counterReducer,
    todolist: TodolistReducer,
});

export default rootReducer;