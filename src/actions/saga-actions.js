export const GET_TODOS_FROM_SERVICE = 'GET_TODOS';
export const UPDATE_CURRENT_THROTTLED = 'UPDATE_CURRENT_THROTTLED';

export const updateCurrent = (payload) => ({
    type: UPDATE_CURRENT_THROTTLED,  
    payload
})