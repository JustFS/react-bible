import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';


class AppTodoList extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play Mario Kart'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos= [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default AppTodoList;
