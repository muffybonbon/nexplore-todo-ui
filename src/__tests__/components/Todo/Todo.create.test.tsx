import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import TodoCreate from '../../../components/Todo/TodoCreate';

describe('TodoCreate Component', () => {
  const mockOnCreate = jest.fn();

  it('renders the input and button', () => {
    render(<TodoCreate onCreate={mockOnCreate} isLoading={false} />);

    expect(screen.getByPlaceholderText('Add a task...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('enables the button when input is not empty', () => {
    render(<TodoCreate onCreate={mockOnCreate} isLoading={false} />);

    const input = screen.getByPlaceholderText('Add a task...');
    fireEvent.change(input, { target: { value: 'New Task' } });

    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('disables the button when input is empty', () => {
    render(<TodoCreate onCreate={mockOnCreate} isLoading={false} />);

    const input = screen.getByPlaceholderText('Add a task...');
    fireEvent.change(input, { target: { value: '' } });

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('calls onCreate with input value on form submission', async () => {
    render(<TodoCreate onCreate={mockOnCreate} isLoading={false} />);

    const input = screen.getByPlaceholderText('Add a task...');
    await userEvent.click(input);
    await userEvent.keyboard('NewTask');
    await userEvent.click(screen.getByRole('button'));

    expect(mockOnCreate).toHaveBeenCalledWith({ title: 'NewTask' });
  });

  it('shows loading state on button when isLoading is true', () => {
    render(<TodoCreate onCreate={mockOnCreate} isLoading={true} />);

    expect(screen.getByRole('button')).toBeDisabled();
  });
});
