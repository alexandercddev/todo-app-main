import React, { useEffect, useReducer, useState } from 'react';
import { toDoReducer } from '../reducers/toDoReducer';
import ToDoList from './ToDoList';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [
        {
            id: 1,
            description: 'Learn HTML',
            done: true,
            checked: false,
        },
        {
            id: 2,
            description: 'Learn CSS',
            done: false,
            checked: true,
        },
        {
            id: 3,
            description: 'Learn JavaScript',
            done: false,
            checked: false,
        },
        {
            id: 4,
            description: 'Learn React',
            done: true,
            checked: false,
        },
        {
            id: 5,
            description: 'Learn NextJS',
            done: true,
            checked: true,
        }
    ];
};

const ToDoApp = () => {
    const [ todos, dispath ] = useReducer(toDoReducer, [], init);
    const [ mode, setMode] = useState('moon')
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log('Me renderice de nuevo me dio ansiedad')
    }, [todos]);
    const handleMode = () => setMode(mode === 'moon' ? 'sun' : 'moon');
    const handleAdd = (newTodo) => {
        dispath({
            type: 'checked',
            payload: newTodo
        });
    }
    const handleActive = (id) => {
        dispath({
            type: 'checked',
            payload: id
        });
    }
    const handleDelete = (id) => {
        dispath({
            type: 'delete',
            payload: id
        });
    }
    const handleToggle = (id) => {
        dispath({
            type: 'toggle',
            payload: id
        });
    }
    return (
        <div className={`app ${mode}`}> 
            <div className={`container ${mode}`}>
                <div className='box box-header'>
                    <h1 className='title'>TODO</h1> 
                    <button 
                        onClick={handleMode}
                        className={`btn btn-${mode}`}
                    ></button>
                </div>
                <div className={`box box-content ${mode}`}>
                    <form className='form'>
                        <label className="container-checkbox">
                            <input 
                                type="checkbox" 
                                className='checkbox' />
                            <span className="checkmark"></span>
                        </label> 
                        <input 
                            type='text' 
                            placeholder='Create a new todo...' 
                            name="description"
                            className="form-control" 
                            autoComplete="off" 
                        ></input>
                    </form>
                </div>
                <div className={`box box-content ${mode}`}>
                    <ToDoList 
                        todos={todos}
                        handleActive={handleActive}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                    <div className='footer-box'>
                        <span>{todos.length} items left</span>
                        <div className='footer-center'>
                            <button className='action'>All</button>
                            <button className='action'>Active</button>
                            <button className='action'>Completed</button> 
                        </div>
                        <button className='action'>Clear Complete</button>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default ToDoApp;