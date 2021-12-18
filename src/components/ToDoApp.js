import React from 'react';
import { ReactComponent as IconCheck } from '../assets/svgs/icon-check.svg';
import { ReactComponent as IconMoon } from '../assets/svgs/icon-moon.svg';
import { ReactComponent as IconSun } from '../assets/svgs/icon-sun.svg';
import {Item as TodoItem} from './Item'
export const ToDoApp = () => {
    return (
        <div className="todo-app">
            <header className="header-app"> </header>
            <section className="container">
                <div className="content">
                    <div className="title">
                            <h1>TODO</h1>
                    </div>
                    <button id="btn-mode" className="btn-icon">
                        <IconMoon />
                    </button>
                </div>
                <div className="content">
                    <div className='card'>
                        <div className='card-content'>
                            <TodoItem line={false}></TodoItem>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className='card'>
                        <div className='card-content'>
                            <TodoItem></TodoItem>
                            <TodoItem></TodoItem>
                            <TodoItem></TodoItem>
                            <TodoItem></TodoItem>
                            <TodoItem></TodoItem>
                            <TodoItem></TodoItem>
                            <TodoItem></TodoItem>
                            <TodoItem></TodoItem>
                            <TodoItem></TodoItem>
                        </div>
                        <div className='card-footer'>
                            <span>5 items left</span>
                            <button className='btn'> All</button>
                            <button className='btn'> Active</button>
                            <button className='btn'> Completed</button>
                            <button className='btn'> Clear Completed</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      );
}

export default ToDoApp;
