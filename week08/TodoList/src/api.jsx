// api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const getTodos = async (query) => {
  const res = await API.get(`/todo${query ? `?title=${query}` : ""}`);
  return res.data[0];
};

export const getTodoById = async (id) => {
  const res = await API.get(`/todo/${id}`);
  return res.data;
};

export const createTodo = async (data) => {
  const res = await API.post("/todo", data);
  return res.data;
};

export const updateTodo = async (id, data) => {
  const res = await API.patch(`/todo/${id}`, data);
  return res.data;
};

export const deleteTodo = async (id) => {
  const res = await API.delete(`/todo/${id}`);
  return res.data;
};

export default API;
