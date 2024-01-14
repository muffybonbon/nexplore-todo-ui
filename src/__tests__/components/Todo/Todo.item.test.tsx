import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { toast } from 'react-toastify';

import TodoItem from '../../../components/Todo/TodoItem';

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

describe('TodoItem Component', () => {
  const mockItem = {
    id: 1,
    title: 'Test Todo',
    is_done: false,
    created_at: new Date(),
    created_by: 'test',
    updated_at: new Date(),
    updated_by: 'test',
  };

  const mockUpdateStatus = jest.fn();
  const mockDeleteTodo = jest.fn();
  const mockUpdateTodo = jest.fn();

  it('renders todo item correctly', () => {
    render(
      <TodoItem
        item={mockItem}
        onUpdateTodoStatus={mockUpdateStatus}
        onDeleteTodo={mockDeleteTodo}
        onUpdateTodo={mockUpdateTodo}
      />
    );

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText(new Date(mockItem.created_at).toLocaleDateString())).toBeInTheDocument();
  });

  it('handles update status button click', () => {
    render(
      <TodoItem
        item={mockItem}
        onUpdateTodoStatus={mockUpdateStatus}
        onDeleteTodo={mockDeleteTodo}
        onUpdateTodo={mockUpdateTodo}
      />
    );

    fireEvent.click(screen.getAllByRole('button')[2]);
    expect(mockUpdateStatus).toHaveBeenCalledWith(mockItem.id, !mockItem.is_done);
  });

  it('handles delete button click', () => {
    render(
      <TodoItem
        item={mockItem}
        onUpdateTodoStatus={mockUpdateStatus}
        onDeleteTodo={mockDeleteTodo}
        onUpdateTodo={mockUpdateTodo}
      />
    );

    fireEvent.click(screen.getAllByRole('button')[3]);
    expect(mockDeleteTodo).toHaveBeenCalledWith(mockItem.id);
  });

  it('displays a line-through style when todo is done', () => {
    const doneItem = { ...mockItem, is_done: true };
    const { container } = render(
      <TodoItem
        item={doneItem}
        onUpdateTodoStatus={mockUpdateStatus}
        onDeleteTodo={mockDeleteTodo}
        onUpdateTodo={mockUpdateTodo}
      />
    );

    expect(container.querySelector('[is-done="true"]')).toHaveStyle('text-decoration: line-through');
  });

  it('handle edit title input', async () => {
    render(
      <TodoItem
        item={mockItem}
        onUpdateTodoStatus={mockUpdateStatus}
        onDeleteTodo={mockDeleteTodo}
        onUpdateTodo={mockUpdateTodo}
      />
    );

    await userEvent.click(screen.getAllByRole('button')[1]);
    await userEvent.click(screen.getByText('Test Todo'));
    await userEvent.keyboard('{Tab}');
    expect(mockUpdateTodo).toHaveBeenCalledWith(mockItem.id, { title: mockItem.title, is_done: mockItem.is_done });
  });

  it('shows a toast message when trying to update with an empty title', async () => {
    render(
      <TodoItem
        item={mockItem}
        onUpdateTodoStatus={mockUpdateStatus}
        onDeleteTodo={mockDeleteTodo}
        onUpdateTodo={mockUpdateTodo}
      />
    );

    await userEvent.click(screen.getAllByRole('button')[1]);
    await userEvent.click(screen.getByText('Test Todo'));
    await userEvent.keyboard('{Control>}A{/Control}{Backspace}');
    await userEvent.keyboard('{Tab}');
    expect(toast).toHaveBeenCalledWith('Title cannot be empty', { type: 'error' });
  });
});
