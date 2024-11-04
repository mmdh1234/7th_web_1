import './App.css';
import { useContext, useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import { TodoContext } from './context/TodoContext';


function App() {


  const {todos, setTodos, text, setText, editingId, setEditingId, editText, setEditText,
    handleSubmit, addTodo, deleteTodo, updateTodo,} = useContext(TodoContext)

  return (
    <div className="app-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <Input
          className="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="새로운 할 일을 입력하세요"
        />
        <Button className="add-btn" onClick={addTodo} type="submit">
          할 일 등록
        </Button>
      </form>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {editingId !== todo.id && (
              <div className="todo-text">
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            )}
            {editingId === todo.id && (
              <div className="todo-edit">
                <p>{todo.id}.</p>
                <Input
                  className="edit-input"
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}

            <Button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              삭제하기
            </Button>

            {editingId === todo.id ? (
              <Button
                className="update-btn"
                onClick={() => updateTodo(editingId, editText)}
              >
                수정 완료
              </Button>
            ) : (
              <Button
                className="edit-btn"
                onClick={() => setEditingId(todo.id)}
              >
                수정 진행
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
