import React, { useState } from "react";
import styled from "styled-components";

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAdd({ title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목 입력"
          required
        />
        <TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용 입력"
          rows="3"
          required
        />
        <Button type="submit" disabled={!title.trim() || !content.trim()}>
          Todo 생성
        </Button>
      </form>
    </FormContainer>
  );
}

export default TodoForm;

const FormContainer = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f1f3f5;
  border-radius: 10px;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  background-color: ${(props) => (props.disabled ? "#adb5bd" : "#51cf66")};
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.7" : "1")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#adb5bd" : "#40c057")};
  }
`;
