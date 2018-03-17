import reducer, { addTodo } from './todo';

describe('Todo Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type: 'ANYTHING'});
        expect(result).toBeDefined();
    })

    test('adds a todo', () => {
        const state = {
            todos: [
                {id: 1, name:'name1', isComplete: true},
                {id: 2, name:'name2', isComplete: true},
                {id: 3, name:'name3', isComplete: false}
            ]
        }

        const newTodo = {id:4, name:'newTodo', isComplete: false};

        const result = reducer(state, addTodo(newTodo));
        expect(result).toEqual({
            todos: state.todos.concat(newTodo)
        });
    })

})