import React, { useEffect, useReducer, useState } from 'react';
import { toDoReducer } from '../reducers/toDoReducer';
import ToDoAdd from './ToDoAdd';
import ToDoFilters from './ToDoFilters';
import ToDoList from './ToDoList';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [
        {
            id: 1,
            description: 'Learn HTML',
            done: true,
            checked: false,
            view: true,
        },
        {
            id: 2,
            description: 'Learn CSS',
            done: false,
            checked: true,
            view: true,
        },
        {
            id: 3,
            description: 'Learn JavaScript',
            done: false,
            checked: false,
            view: true,
        },
        {
            id: 4,
            description: 'Learn React',
            done: true,
            checked: false,
            view: true,
        },
        {
            id: 5,
            description: 'Learn NextJS',
            done: true,
            checked: true,
            view: true,
        }
    ];
};

const ToDoApp = () => {
    const [ todos, dispath ] = useReducer(toDoReducer, [], init); 
    const [ mode, setMode] = useState('moon'); 
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)); 
        console.log(todos)
        console.log('Me renderice de nuevo me dio ansiedad')
    }, [todos]);
    const handleMode = () => setMode(mode === 'moon' ? 'sun' : 'moon');
    const handleAdd = (newTodo) => {
        const last = todos.at(-1);
        console.log(last)
        dispath({
            type: 'add',
            payload: {
                ...newTodo,
                id: last !== undefined ? last.id + 1 : 1
            }
        });
    }
    const handleChecked = (id) => {
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
    const handleAll = () => { 
        dispath({
            type: 'filter-all'
        });
    }
    const handleActive = () => {
        dispath({
            type: 'filter-checked' 
        });
    }
    const handleCompleted = () => {
        dispath({
            type: 'filter-done' 
        });
    }
    const handleClearCompleted = () => {
        dispath({
            type: 'clear'
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
                    <ToDoAdd 
                        handleAdd={handleAdd}
                    />
                </div>
                <div className={`box box-content ${mode}`}>
                    <ToDoList 
                        todos={todos}
                        handleChecked={handleChecked}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                    <div className='footer-box'>
                        <span>{todos.length} items left</span>
                        <ToDoFilters  
                            className={`desk`}
                            handleAll={handleAll}
                            handleActive={handleActive}
                            handleCompleted={handleCompleted}
                        />
                        <button 
                            className='action'
                            onClick={handleClearCompleted}
                        >Clear Completed</button>
                    </div>
                </div>
                <div className={`box box-content ${mode} mobile`}>
                    <div className='footer-box'>
                        <ToDoFilters 
                            handleAll={handleAll}
                            handleActive={handleActive}
                            handleCompleted={handleCompleted}
                        />    
                    </div> 
                </div>
            </div>
        </div> 
    );
}

export default ToDoApp;