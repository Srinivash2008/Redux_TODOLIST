import { ADD_TODO_LIST, DELETE_TODO_LIST, EDIT_TODO_LIST } from './action';

const initialState = []

export default function TodolistReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO_LIST:
            return [...state, action.payload.item];
        case DELETE_TODO_LIST:
            return state.filter((_, index) => index !== action.payload.id);
        case EDIT_TODO_LIST:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        task: action.payload.item
                    };
                }
                return todo;
            });
        default:
            return state;
    }
}