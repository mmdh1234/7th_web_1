import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoList({ todos, onUpdate, onDelete }) {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
}

export default TodoList;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
