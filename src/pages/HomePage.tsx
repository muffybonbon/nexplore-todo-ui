import React, { useState, useEffect } from 'react';

import TodoView from '../components/Todo/TodoView';
import TodoCreate from '../components/Todo/TodoCreate';

import TodoService from '../services/TodoService';

import { ITodo, ITodoCreate, ITodoUpdate } from '../types/todo.types';

const API_VERSION = 'v1';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const TodoAPI = new TodoService(API_VERSION);

  const fetchTodos = async (): Promise<void> => {
    const fetchedTodos = await TodoAPI.getTodos();
    setTodos(fetchedTodos);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchTodos();
  }, []);

  const onCreateTodo = async (todo: ITodoCreate): Promise<void> => {
    setIsLoading(true);
    const createResult = await TodoAPI.addTodo(todo);
    if (createResult && createResult.id) {
      fetchTodos();
    }
  };

  const onUpdateTodo = async (id: number, todo: ITodoUpdate): Promise<void> => {
    setIsLoading(true);
    const updateResult = await TodoAPI.updateTodoById(id, todo);
    if (updateResult && updateResult.id) {
      fetchTodos();
    }
  };

  const onUpdateTodoStatus = async (id: number, is_done: boolean): Promise<void> => {
    setIsLoading(true);
    const updateResult = await TodoAPI.patchTodoStatusById(id, is_done);
    if (updateResult && updateResult.id) {
      fetchTodos();
    }
  };

  const onDeleteTodo = async (id: number): Promise<void> => {
    setIsLoading(true);
    const deleteResult = await TodoAPI.deleteTodoById(id);
    if (deleteResult && deleteResult.id) {
      fetchTodos();
    }
  };

  return (
    <>
      <TodoCreate onCreate={onCreateTodo} isLoading={isLoading} />
      <TodoView
        data={todos}
        onDeleteTodo={onDeleteTodo}
        onUpdateTodo={onUpdateTodo}
        onUpdateTodoStatus={onUpdateTodoStatus}
      />
    </>
  );
};

export default HomePage;
