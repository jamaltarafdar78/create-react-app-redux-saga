import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with React</h1>
        </header>
        <div className="Todo-App">
          <TodoForm />
          <TodoList />
        </div> 
      </div>
    );
  }  
}
