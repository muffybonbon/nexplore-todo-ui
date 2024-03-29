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

  async updateTodoById(id: number, updatedTodo: Partial<ITodo>): Promise<ITodoID | null> {
    try {
      return await this.put<ITodo, Partial<ITodo>>(`/todos/${id}`, updatedTodo);
    } catch (error) {
      return null;
    }
  }

  async patchTodoStatusById(id: number, isDone: boolean): Promise<ITodoID | null> {
    try {
      return await this.patch<ITodo, Partial<ITodo>>(`/todos/${id}/status`, { is_done: isDone });
    } catch (error) {
      return null;
    }
  }

  async deleteTodoById(id: number): Promise<ITodoID | null> {
    try {
      return await this.delete<ITodo>(`/todos/${id}`);
    } catch (error) {
      return null;
    }
  }
}

export default TodoService;
