import React, { useState } from 'react';
import { Button, List, Typography } from 'antd';
import styled from 'styled-components';

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

const TodoItem: React.FC<ITodoItemProps> = ({ item, onUpdateTodoStatus, onDeleteTodo }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const isDone = item.is_done;

  const onClickUpdateStatus = () => {
    onUpdateTodoStatus(item.id, !isDone);
  };

  const onClickDelete = () => {
    onDeleteTodo(item.id);
  };

  return (
    <List.Item
      actions={[
        <div key={item.id}>
          <StyledButton type="default">🖊️</StyledButton>
          <StyledButton type="default" onClick={onClickUpdateStatus}>
            ✅
          </StyledButton>
          <StyledButton type="default" onClick={onClickDelete}>
            ❌
          </StyledButton>
        </div>,
      ]}
    >
      <List.Item.Meta
        title={<StyledText is-done={isDone.toString()}>{item.title}</StyledText>}
        description={
          <StyledText is-done={isDone.toString()} type="secondary">
            {new Date(item.created_at).toLocaleDateString()}
          </StyledText>
        }
      />
    </List.Item>
  );
};

export default TodoItem;
