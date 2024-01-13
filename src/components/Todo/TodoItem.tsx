import React, { useState } from 'react';
import { Button, List, Typography } from 'antd';
import styled from 'styled-components';

import { ITodoItemProps } from '../../types/todo.types';

const { Text } = Typography;

const StyledText = styled(Text)<{ isDone: boolean }>`
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
`;

const StyledButton = styled(Button)`
  border-color: #fff;
  box-shadow: none;

  &:hover {
    border-color: #fff !important;
  }
`;

const TodoItem: React.FC<ITodoItemProps> = ({ item, onUpdateTodoStatus }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const isDone = item.is_done;

  const onUpdateStatus = () => {
    onUpdateTodoStatus(item.id, !isDone);
  };

  return (
    <List.Item
      actions={[
        <div key={item.id}>
          <StyledButton type="default">🖊️</StyledButton>
          <StyledButton type="default" onClick={onUpdateStatus}>
            ✅
          </StyledButton>
          <StyledButton type="default">❌</StyledButton>
        </div>,
      ]}
    >
      <List.Item.Meta
        title={<StyledText isDone={isDone}>{item.title}</StyledText>}
        description={
          <StyledText isDone={isDone} type="secondary">
            {new Date(item.created_at).toLocaleDateString()}
          </StyledText>
        }
      />
    </List.Item>
  );
};

export default TodoItem;
