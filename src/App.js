import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Footer, 
  Message,
  TodoForm,
  TodoList } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with React</h1>
        </header>
        <Router>
          <div className="Todo-App">
            <Message />
            <TodoForm />
            <TodoList />
            <Footer />
          </div> 
        </Router>
      </div>
    );
  }  
}
