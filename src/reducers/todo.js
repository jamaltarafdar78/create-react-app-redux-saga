import * as ACTIONS from '../actions/todo-actions';

const initState = {
    todos: [
        {id:1, name: 'name1', isComplete: true},
        {id:2, name: 'name2', isComplete: false},
        {id:3, name: 'name3', isComplete: false}
    ],
    currentTodo:''
}

export default (state=initState, action) => {
    
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            }
        case ACTIONS.CURRENT_TODO: 
            console.log(`Updating current todo with ${action.payload}`);
            return {
                ...state,
                currentTodo: action.payload
            }
        case ACTIONS.LOAD_TODOS: 
            console.log(`Loading ${JSON.stringify(action.payload)}`);
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state;
    }
    
    
}