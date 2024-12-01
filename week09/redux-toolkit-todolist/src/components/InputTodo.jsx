import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/todoSlice";
import styled from "styled-components";

// Styled components
const InputTodoWrapper = styled.div`
  margin: 20px auto;
  width: 300px;
`;

const TextInput = styled.input`
  width: 200px;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.input`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function InputTodo() {
  const dispatch = useDispatch();

  const [todolist, setTodolist] = useState({ text: "" });

  function handleText(e) {
    setTodolist({ text: e.target.value });
  }

  function onReset() {
    setTodolist({ text: "" });
  }

  return (
    <InputTodoWrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todolist.text !== "") {
            dispatch(add(todolist.text));
          } else {
            alert("할 일을 입력해주세요!");
          }
          onReset();
        }}
      >
        <div>
          <TextInput type="text" value={todolist.text} onChange={handleText} />
          <SubmitButton type="submit" value="+" />
        </div>
      </form>
    </InputTodoWrapper>
  );
}
