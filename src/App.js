import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/todo/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/todo/AddTodo';
import About from './components/pages/About'
import {v4 as uuidv4} from 'uuid'; // to generate unique ids for all todos

class App extends React.Component{
  state = {
    todos: [] // will be filled with data
  }
  
  // toggle the todo item between complete and incomplete states 
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // deletes the item from the todo list
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // adding to the todo list
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render(){
      return(
        <Router>
          <div className="App">
            <div className="container">
              <Header/>
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo}/>
                </React.Fragment>
              )} />
              <Route path="/about" component={About}/>
            </div>
          </div>
        </Router>
      );
  }
}

export default App;
