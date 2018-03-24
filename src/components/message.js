import React from 'react';
import { connect } from 'react-redux';

const Message = ({message}) => message 
    ? <span>{message}</span>
    : null


const MessageConnected = connect(
    state => ({message: state.message})
)(Message);

export default MessageConnected;