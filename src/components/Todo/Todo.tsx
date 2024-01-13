import React from 'react';
import { List, Typography } from 'antd';
import styled from 'styled-components';

import { getDateInfo } from '../../utils/dateUtils';

import { ITodo } from '../../types/components/todo.component.types';

const { Text } = Typography;

interface ITodoProps {
  data: ITodo[];
}

const HeaderTitle = styled.p.withConfig(Text)`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Todo: React.FC<ITodoProps> = ({ data }: ITodoProps) => {
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
        <List.Item>
          <List.Item.Meta
            title={item.title}
            description={<Text type="secondary">{new Date(item.created_at).toLocaleDateString()}</Text>}
          />
          {/* <Typography.Text mark>[ITEM]</Typography.Text> {item} */}
        </List.Item>
      )}
    />
  );
};

export default Todo;
