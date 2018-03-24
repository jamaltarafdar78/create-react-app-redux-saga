const MESSAGE_SHOW = 'MESSAGE_SHOW';
const MESSAGE_CLEAR = 'MESSAGE_CLEAR';

export const messageShow = (msg) => ({
    type: MESSAGE_SHOW,
    payload: msg
});

export const messageClear = () => ({
    type: MESSAGE_CLEAR
});

export default (state='', action) => {
    switch (action.type) {
        case MESSAGE_SHOW:
            return action.payload;
        case MESSAGE_CLEAR:
            return '';
        default:
            return state;
    }
}