import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, complete } from "../redux/todoSlice";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

// Styled components
const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const TodoText = styled.div`
  flex: 1;
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #ff0000;

  &:hover {
    color: #cc0000;
  }
`;

export default function TodoList() {
  const todolist = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const trash = <FontAwesomeIcon icon={faTrashCan} />;

  return (
    <ListWrapper>
      {todolist.map((todo) => (
        <ListItem key={todo.id}>
          <Checkbox
            type="checkbox"
            checked={todo.complete}
            onChange={() => dispatch(complete(todo.id))}
          />
          <TodoText complete={todo.complete}>{todo.text}</TodoText>
          <DeleteButton onClick={() => dispatch(remove(todo.id))}>
            {trash}
          </DeleteButton>
        </ListItem>
      ))}
    </ListWrapper>
  );
}
