import React from 'react';
import {connect} from 'react-redux';  

const TodoItem = ({name, isComplete}) => 
    <li>
        <input type="checkbox" defaultChecked={isComplete}/>
        {name}
    </li>


const TodoLost = ({todos}) =>
    <div className="Todo-List">
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
        </ul>
    </div>

const TodolistConnect = connect(
    state => ({ todos: state.todo.todos })
)(TodoLost);

export default TodolistConnect;