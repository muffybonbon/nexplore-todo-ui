import React from 'react';
import { Button, List, Typography } from 'antd';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { ITodoItemProps } from '../../types/todo.types';

const { Text } = Typography;

const StyledText = styled(Text)<{ 'is-done': string }>`
  text-decoration: ${(props) => (props['is-done'] === 'true' ? 'line-through' : 'none')};
`;

const StyledButton = styled(Button)`
  border-color: #fff;
  box-shadow: none;

  &:hover {
    border-color: #fff !important;
  }
`;

const TodoItem: React.FC<ITodoItemProps> = ({ item, onDeleteTodo, onUpdateTodo, onUpdateTodoStatus }) => {
  const { is_done } = item;

  const onClickUpdateStatus = (): void => {
    onUpdateTodoStatus(item.id, !is_done);
  };

  const onClickDelete = (): void => {
    onDeleteTodo(item.id);
  };

  const onFinishedEdit = (value: string): void => {
    if (value) {
      onUpdateTodo(item.id, { title: value, is_done });
    } else {
      toast('Title cannot be empty', { type: 'error' });
    }
  };

  return (
    <List.Item
      actions={[
        <div key={item.id}>
          <StyledButton type="default" role="button" onClick={onClickUpdateStatus}>
            ✅
          </StyledButton>
          <StyledButton type="default" role="button" onClick={onClickDelete}>
            ❌
          </StyledButton>
        </div>,
      ]}
    >
      <List.Item.Meta
        title={
          <StyledText editable={{ onChange: onFinishedEdit }} is-done={is_done.toString()}>
            {item.title}
          </StyledText>
        }
        description={
          <StyledText is-done={is_done.toString()} type="secondary">
            {new Date(item.created_at).toLocaleDateString()}
          </StyledText>
        }
      />
    </List.Item>
  );
};

export default TodoItem;
