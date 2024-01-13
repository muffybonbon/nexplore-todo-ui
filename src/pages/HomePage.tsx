import React, { useState, useEffect } from 'react';

import Todo from '../components/Todo/Todo';

import TodoService from '../services/TodoService';

import { ITodo } from '../types/components/todo.component.types';

const API_VERSION = 'v1';

const HomePage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const TodoAPI = new TodoService(API_VERSION);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await TodoAPI.getTodos();
      setTodos(todos);
    };

    fetchTodos();
  }, []);

  return (
    <>
      <Todo data={todos} />
    </>
  );
};

export default HomePage;
