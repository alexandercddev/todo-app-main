import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({ todos, handleDelete, handleToggle, handleActive}) => {
    return ( 
        <ul className='ul-todos'>
            {todos.length === 0 
                ? <div className='li-todo'> Not records </div>
                : todos.map((todo, index) => {
                    return (<ToDoListItem 
                        key={`todo-${index}`}
                        {...todo}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                        handleActive={handleActive}
                    ></ToDoListItem>);
                })
            } 
        </ul> 
    );
}

export default ToDoList;