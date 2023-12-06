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
            </div>
        </div>
    );
};

export default TodoApp;