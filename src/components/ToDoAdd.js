import React, { useState } from 'react';

const init = { 
    description: '', 
    checked: false
}
const ToDoAdd = ({ handleAdd }) => {
    const [ form, setForm ] = useState(init);
    const { description, checked } = form;
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd({
            description,
            checked,
            done: false,
            view: true
        });
        setForm(init)
    }
    const handleChange = ({ target }) => {
        const { type, value, name, checked } = target; 
        const data = type === 'checkbox' ? checked : value;
        setForm((current) => ({
            ...current,
            [name]: data
        }))
    }
    return ( 
        <form className='form' onSubmit={handleSubmit}>
            <label className="container-checkbox">
                <input 
                    type="checkbox" 
                    name='checked'
                    className='checkbox' 
                    checked={checked}
                    onChange={handleChange}/>
                <span className="checkmark"></span>
            </label> 
            <input 
                type='text' 
                placeholder='Create a new todo...' 
                name="description"
                className="form-control" 
                autoComplete="off" 
                value={description}
                onChange={handleChange}
            ></input>
        </form>
    );
}

export default ToDoAdd;