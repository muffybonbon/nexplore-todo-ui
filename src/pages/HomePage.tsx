import React, { useState, useEffect } from 'react';

import TodoView from '../components/Todo/TodoView';
import TodoCreate from '../components/Todo/TodoCreate';

import TodoService from '../services/TodoService';

import { ITodo, ITodoCreate } from '../types/todo.types';

const API_VERSION = 'v1';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const TodoAPI = new TodoService(API_VERSION);

  const fetchTodos = async () => {
    setIsLoading(true);
    const fetchedTodos = await TodoAPI.getTodos();
    setTodos(fetchedTodos);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const onCreateTodo = async (todo: ITodoCreate) => {
    const createResult = await TodoAPI.addTodo(todo);
    if (createResult && createResult.id) {
      fetchTodos();
    }
  };

  return (
    <>
      <TodoCreate onCreate={onCreateTodo} isLoading={isLoading} />
      <TodoView data={todos} />
    </>
  );
};

export default HomePage;
