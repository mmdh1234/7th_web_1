import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function TodoItem({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedContent, setEditedContent] = useState(todo.content);

  const handleSave = () => {
    onUpdate(todo.id, { title: editedTitle, content: editedContent });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(todo.title);
    setEditedContent(todo.content);
  };

  const handleCheckChange = (e) => {
    onUpdate(todo.id, { checked: e.target.checked });
  };

  return (
    <ListItem>
      <Checkbox
        type="checkbox"
        checked={todo.checked}
        onChange={handleCheckChange}
      />
      <TodoContent checked={todo.checked}>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="제목을 입력하세요"
            />
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              rows="4"
              placeholder="내용을 입력하세요"
            ></textarea>
            <Button primary onClick={handleSave}>
              저장
            </Button>
            <Button onClick={handleCancel}>취소</Button>
          </div>
        ) : (
          <>
            <Link to={`/todo/${todo.id}`}>
              <h3>{todo.title}</h3>
            </Link>
            <p>{todo.content}</p>
          </>
        )}
      </TodoContent>
      {!isEditing && (
        <div>
          <Button primary onClick={() => setIsEditing(true)}>
            수정
          </Button>
          <Button onClick={() => onDelete(todo.id)}>삭제</Button>
        </div>
      )}
    </ListItem>
  );
}

export default TodoItem;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TodoContent = styled.div`
  flex: 1;
  margin-left: 10px;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) => (props.checked ? "#868e96" : "#343a40")};
`;

const EditableInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #51cf66;
    box-shadow: 0 0 5px rgba(81, 207, 102, 0.5);
  }
`;

const EditableTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #51cf66;
    box-shadow: 0 0 5px rgba(81, 207, 102, 0.5);
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#51cf66" : "#ff6b6b")};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: ${(props) => (props.primary ? "#40c057" : "#fa5252")};
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
