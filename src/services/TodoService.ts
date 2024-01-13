import APIService from './APIService';

import { ITodo, ITodoCreate, ITodoID } from '../types/todo.types';

class TodoService extends APIService {
  async getTodos(): Promise<ITodo[] | []> {
    try {
      return await this.get<ITodo[]>('/todos');
    } catch (error) {
      return [];
    }
  }

  async addTodo(newTodo: ITodoCreate): Promise<ITodoID | null> {
    try {
      return await this.post<ITodo, ITodoCreate>('/todos', newTodo);
    } catch (error) {
      return null;
    }
  }

  async updateTodoById(id: number, updatedTodo: ITodo): Promise<ITodoID | null> {
    try {
      return await this.put<ITodo, ITodoCreate>(`/todos/${id}`, updatedTodo);
    } catch (error) {
      return null;
    }
  }

  async patchTodoById(id: number, updatedTodo: Partial<ITodo>): Promise<ITodoID | null> {
    try {
      return await this.patch<ITodo, Partial<ITodo>>(`/todos/${id}`, updatedTodo);
    } catch (error) {
      return null;
    }
  }

  async deleteTodoById(id: number): Promise<void> {
    try {
      return await this.delete<void>(`/todos/${id}`);
    } catch (error) {
      return;
    }
  }
}

export default TodoService;
