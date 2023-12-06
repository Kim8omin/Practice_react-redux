import React from 'react';
import { useState } from 'react';

const TodoApp = (props) => {
    const {
        //Redux state
        todoItems,
        //Redux dispatch
        addTodo,
        removeTodo,
        removeAll,
        triggerAsyncFunction
    } = props;
    const [newTodo,setNewTodo] = useState('');
    return (
        <div>
            <h3>React-redux Practice</h3>
            <p>Insert things to do for today</p>
            <ul>
                {todoItems.map((todoItem,index)=>{
                    return (
                        <li key={index}>{todoItem}</li>
                    );
                })}
            </ul>
            <div>
            <input value={newTodo}
            onChange={(e)=>setNewTodo(e.target.value)}/>
            <button onClick={()=>{addTodo(newTodo); setNewTodo('')}}>add</button>
            <button onClick={removeTodo}>remove</button>
            <button onClick={removeAll}>remove all</button>
            <button onClick ={()=>{
                triggerAsyncFunction((dispatch,getState)=>{
                    console.log("Async test start", getState());

                    new Promise((resolve,reject)=> {
                        setTimeout(resolve, 3000);})
                        .then(()=>{
                            console.log("fulfilled", getState());})
                        .finally (()=>{
                            console.log("Async text ends", getState())
                        });
                        });
                    }}
                    >test async function middleware</button>
            </div>
        </div>
    );
};

export default TodoApp;