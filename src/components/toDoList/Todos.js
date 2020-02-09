import React from 'react';

const Todos = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <li className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}> {todo.content}</span>
        </li>
      )
    })
  ) : (
    <p>You have no todo's left</p>
  )

  return (
    <div>
      {todoList}
    </div>
  );
};

export default Todos;