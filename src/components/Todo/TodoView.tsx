import React from 'react';
import { List, Typography } from 'antd';
import styled from 'styled-components';

import TodoItem from './TodoItem';

import { getDateInfo } from '../../utils/date.utils';

import { ITodoViewProps } from '../../types/todo.types';

const { Text } = Typography;

const HeaderTitle = styled.p.withConfig(Text)`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Todo: React.FC<ITodoViewProps> = ({ data, onDeleteTodo, onUpdateTodo, onUpdateTodoStatus }) => {
  const { date, month, year } = getDateInfo(new Date());

  return (
    <List
      style={{ backgroundColor: '#fff', padding: '2rem 1.5rem 3rem 1.5rem' }}
      header={
        <HeaderTitle>
          {date} {month} {year}
        </HeaderTitle>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <TodoItem
          item={item}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
          onUpdateTodoStatus={onUpdateTodoStatus}
        />
      )}
    />
  );
};

export default Todo;
