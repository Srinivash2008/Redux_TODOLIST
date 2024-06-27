export const ADD_TODO_LIST = 'Todolist/ADD_TODO_LIST';
export const DELETE_TODO_LIST = 'Todolist/DELETE_TODO_LIST';
export const EDIT_TODO_LIST = 'Todolist/EDIT_TODO_LIST';

export const add_todo_list = (item) => ({
    type: ADD_TODO_LIST,
    payload: {
        item: item
    }
});

export const delete_todo_list = (id) => ({
    type: DELETE_TODO_LIST,
    payload: {
        id: id
    }
});

export const edit_todo_list = (id, item) => ({
    type: EDIT_TODO_LIST,
    payload: {
        id: id,
        item: item
    }
});