import React from 'react';

const ToDoListItem = ({ id, description, done, checked, handleDelete, handleToggle, handleChecked}) => {
    return ( 
        <>
            <li className='li-todo'>
                <label className="container-checkbox">
                    <input 
                        type="checkbox" 
                        className='checkbox' 
                        checked={checked}
                        onChange={() => {handleChecked(id)}}/>
                    <span className="checkmark"></span>
                </label> 
                <span 
                    className={`description ${done && 'complete'}`}
                    onClick={()=> {handleToggle(id)}}
                >{description}</span>
                <button 
                    className='btn btn-close'
                    onClick={() => {handleDelete(id)}}
                ></button>
            </li>
            <div className='separator'></div>
        </>
    );
}

export default ToDoListItem;