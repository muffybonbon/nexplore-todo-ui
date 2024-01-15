import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Todo from '../../../components/Todo/TodoView';
import { getDateInfo } from '../../../utils/date.utils';

import { ITodoItemProps } from '../../../types/todo.types';

jest.mock('../../../components/Todo/TodoItem', () => ({
  __esModule: true,
  default: (props: ITodoItemProps) => (
    <div data-testid="todo-item" onClick={() => props.onDeleteTodo(1)}>
      Mock TodoItem
    </div>
  ),
}));

describe('Todo Component', () => {
  const mockData = [
    {
      id: 1,
      title: 'Task 1',
      is_done: false,
      created_at: new Date(),
      created_by: 'test',
      updated_at: new Date(),
      updated_by: 'test',
    },
    {
      id: 2,
      title: 'Task 2',
      is_done: true,
      created_at: new Date(),
      created_by: 'test',
      updated_at: new Date(),
      updated_by: 'test',
    },
  ];
  const mockOnDeleteTodo = jest.fn();
  const mockOnUpdateTodo = jest.fn();
  const mockOnUpdateTodoStatus = jest.fn();

  it('renders the current date in header', () => {
    const { date, month, year } = getDateInfo(new Date());
    render(
      <Todo
        data={mockData}
        onDeleteTodo={mockOnDeleteTodo}
        onUpdateTodo={mockOnUpdateTodo}
        onUpdateTodoStatus={mockOnUpdateTodoStatus}
      />
    );

    expect(screen.getByText(`${date} ${month} ${year}`)).toBeInTheDocument();
  });

  it('renders the correct number of TodoItem components', () => {
    render(
      <Todo
        data={mockData}
        onDeleteTodo={mockOnDeleteTodo}
        onUpdateTodo={mockOnUpdateTodo}
        onUpdateTodoStatus={mockOnUpdateTodoStatus}
      />
    );

    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems.length).toBe(mockData.length);
  });

  it('passes correct props to TodoItem components', async () => {
    render(
      <Todo
        data={mockData}
        onDeleteTodo={mockOnDeleteTodo}
        onUpdateTodo={mockOnUpdateTodo}
        onUpdateTodoStatus={mockOnUpdateTodoStatus}
      />
    );

    const todoItems = screen.getAllByTestId('todo-item');
    await userEvent.click(todoItems[0]);
    expect(mockOnDeleteTodo).toHaveBeenCalledWith(1);
  });
});
