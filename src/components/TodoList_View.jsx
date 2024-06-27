import { useSelector, useDispatch } from 'react-redux';
import { add_todo_list, delete_todo_list, edit_todo_list } from '../Store/Todolist/action'
import { useState } from 'react';

function TodoList() {
    const [item, setItem] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editItem, setEditItem] = useState("");
    const dispatch = useDispatch();

    const List_todo = useSelector((state) => state.todolist);

    const handleAddTask = () => {

        if (item.trim() !== '') {
            const ListItem = {
                id: List_todo.length,
                task: item
            }


            dispatch(add_todo_list(ListItem));
            setItem("");
        }
    };

    const handleEdit = (index, todo) => {
        setEditIndex(index);
        setEditItem(todo);
    };

    const handleSave = (id, task) => {
        dispatch(edit_todo_list(id, task));
        setEditIndex(null);
        setEditItem("");
    };

    const handleDelete = (index) => {
        dispatch(delete_todo_list(index));
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>TODO LIST</h1>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <input
                    type='text'
                    placeholder='Enter task'
                    style={{
                        height: '35px',
                        padding: '0 10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        marginRight: '10px',
                        flex: '1',
                    }}
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />
                <button
                    type='button'
                    onClick={handleAddTask}
                    style={{
                        height: '35px',
                        padding: '0 15px',
                        fontSize: '16px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Add
                </button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <ul style={{ listStyle: 'none', padding: '0' }}>
                    {List_todo.map((todo, index) => (
                        <li
                            key={todo.id}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '10px',
                                backgroundColor: '#000',
                                borderRadius: '4px',
                                marginBottom: '10px',
                            }}
                        >
                            {todo.id === editIndex ? (
                                <>
                                    <input
                                        value={editItem}
                                        onChange={(e) => setEditItem(e.target.value)}
                                    />
                                    <button
                                        onClick={() => handleSave(todo.id, editItem)}
                                        style={{
                                            height: '30px',
                                            padding: '5px',
                                            marginRight: '10px',
                                            fontSize: '16px',
                                            backgroundColor: '#f44336',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        SAVE
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span style={{ flex: '1', marginRight: '10px' }} >
                                        {todo.task}
                                    </span>
                                    <button
                                        onClick={() => handleEdit(todo.id, todo.task)}
                                        style={{
                                            height: '30px',
                                            padding: '5px',
                                            marginRight: '10px',
                                            fontSize: '16px',
                                            backgroundColor: '#f44336',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        style={{
                                            height: '30px',
                                            padding: '5px',
                                            fontSize: '16px',
                                            backgroundColor: '#f44336',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;