import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange = e => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div className="addTodo">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add new todo" onChange={this.handleChange} value={this.state.content} />
        </form>
        <p>Click on item to delete it</p>
      </div>
    );
  }
}

export default AddTodo;