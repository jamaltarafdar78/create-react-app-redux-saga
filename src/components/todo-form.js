import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todo-actions';
import {updateCurrent} from '../actions/saga-actions';

const TodoForm = ({currentTodo, updateCurrent}) => {
    const handleInput = (e) => {
        const val = e.target.value;
        updateCurrent(val);
    }

    return (
        <form>
            <input 
                type="text" 
                onChange={e => handleInput(e)}/>
        </form>
    )
}

const TodoFormConnect = connect(
    state => ({ currentTodo: state.currentTodo }),
    {updateCurrent}
)(TodoForm)

export default TodoFormConnect;