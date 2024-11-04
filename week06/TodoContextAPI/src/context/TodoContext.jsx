import { createContext, useState } from 'react';

// 데이터를 담고 있음.
export const TodoContext = createContext();

// 트리 생성
export function TodoContextProvider({ children }) {

    const [todos, setTodos] = useState([
        { id: 1, task: '투두 만들어보기' },
        { id: 2, task: '영화 exercise' },
    ]);

    const [text, setText] = useState('');
    const [editingId, setEditingId] = useState('');
    const [editText, setEditText] = useState('');

    const addTodo = () => {
        if (text.trim().length === 0) {
            alert('할일을 작성해주세요!');
            return;
        }
        setTodos((prev) => [
            ...prev,
            { id: Math.floor(Math.random() * 100) + 2, task: text },
        ]);
        setText('');
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id, text) => {
        setTodos((prev) =>
            prev.map((item) => (item.id === id ? { ...item, task: text } : item))
        );
        setEditingId('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <TodoContext.Provider value={{
            todos,
            setTodos,
            text,
            setText,
            editingId,
            setEditingId,
            editText,
            setEditText,
            handleSubmit,
            addTodo,
            deleteTodo,
            updateTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}