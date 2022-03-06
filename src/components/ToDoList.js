import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({ todos, handleDelete, handleToggle, handleChecked}) => {
    const count = todos.reduce((prev, curr) => {
        return curr.view ? prev + 1 : prev;
    }, 0);
    return ( 
        <ul className='ul-todos'>
            {todos.length === 0 || count === 0
                ? (<div className='li-todo'>
                    <span className={`description`}>Not records</span>
                </div>) 
                : todos.map((todo, index) => {
                    return todo.view && (<ToDoListItem 
                        key={`todo-${index}`}
                        {...todo}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                        handleChecked={handleChecked}
                    ></ToDoListItem>);
                })
            } 
        </ul> 
    );
}

export default ToDoList;