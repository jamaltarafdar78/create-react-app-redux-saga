import * as ACTIONS from '../actions/sync-actions';

const initState = {
    todos: [],
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