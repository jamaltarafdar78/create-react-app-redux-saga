export const ADD_TODO = 'addTodo';
export const CURRENT_TODO = 'CURRENT_TODO';
export const LOAD_TODOS = 'LOAD_TODOS';

export const updateCurrent = (payload) => console.log(`recieved ${payload}`) || ({
    type: CURRENT_TODO,
    payload
});

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});

export const loadTodos = (payload) => ({
    type: LOAD_TODOS,
    payload
});