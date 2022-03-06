import React, { useState } from 'react';

const init = {
    all: 'active',
    active: '',
    completed: ''
}
const ToDoFilters = ({ className, handleAll, handleActive, handleCompleted}) => {
    const [ actives, setActives] = useState(init);
    const { all, active, completed } = actives;
    return (  
        <div className={`footer-center ${className}`}>
            <button 
                className={`action ${all}`}
                onClick={() => {
                    handleAll();
                    setActives({
                        all: 'active',
                        active: '',
                        completed: ''
                    });
                }}
            >All</button>
            <button 
                className={`action ${active}`}
                onClick={() => {
                    handleActive();
                    setActives({
                        all: '',
                        active: 'active',
                        completed: ''
                    });
                }}
            >Active</button>
            <button 
                className={`action ${completed}`}
                onClick={() => {
                    handleCompleted();
                    setActives({
                        all: '',
                        active: '',
                        completed: 'active'
                    });
                }}
            >Completed</button> 
        </div>  
    );
}

export default ToDoFilters;