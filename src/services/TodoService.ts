import APIService from './APIService';

import { ITodo } from '../types/components/todo.component.types';

class TodoService extends APIService {
  async getTodos(): Promise<ITodo[] | []> {
    try {
      return await this.get<ITodo[]>('/todos');
    } catch (error) {
      return [];
    }
  }

  addTodo(newTodo: Omit<ITodo, 'id'>): Promise<ITodo> {
    return this.post<ITodo, Omit<ITodo, 'id'>>('/todos', newTodo);
  }

  updateTodoById(id: number, updatedTodo: ITodo): Promise<ITodo> {
    return this.put<ITodo, ITodo>(`/todos/${id}`, updatedTodo);
  }

  patchTodoById(id: number, updatedTodo: Partial<ITodo>): Promise<ITodo> {
    return this.patch<ITodo, Partial<ITodo>>(`/todos/${id}`, updatedTodo);
  }

  deleteTodoById(id: number): Promise<void> {
    return this.delete<void>(`/todos/${id}`);
  }
}

export default TodoService;
