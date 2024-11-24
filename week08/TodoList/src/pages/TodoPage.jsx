import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getTodos, updateTodo, deleteTodo, createTodo } from "../api";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import Loading from "../components/Loading";
import Error from "../components/Error";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const data = await getTodos();
        setTodos(data);
      } catch (err) {
        console.error("데이터 가져오기 실패:", err);
        setError("할 일을 불러오는 중 문제가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async (newTodo) => {
    try {
      const createdTodo = await createTodo(newTodo);
      setTodos((prevTodos) => [...prevTodos, createdTodo]);
    } catch (err) {
      console.error("ToDo 추가 실패:", err);
      setError("할 일을 추가하는 중 문제가 발생했습니다.");
    }
  };

  const handleUpdateTodo = async (id, updates) => {
    try {
      const updatedTodo = await updateTodo(id, updates);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, ...updates, ...updatedTodo } : todo
        )
      );
    } catch (err) {
      console.error("ToDo 수정 실패:", err);
      setError("할 일을 수정하는 중 문제가 발생했습니다.");
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error("ToDo 삭제 실패:", err);
      setError("할 일을 삭제하는 중 문제가 발생했습니다.");
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <PageContainer>
      <Title>Todo List</Title>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onUpdate={handleUpdateTodo}
        onDelete={handleDeleteTodo}
      />
    </PageContainer>
  );
}

export default TodoPage;

const PageContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #343a40;
`;
