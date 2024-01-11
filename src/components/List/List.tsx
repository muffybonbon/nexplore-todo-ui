import React from 'react';
import { Row, Col, List, Typography } from 'antd';

import { getDateInfo } from '../../utils/dateUtils';

const { Title, Text } = Typography;

const data = [
  {
    title: 'Ant Design Title 1',
    createdAt: new Date(),
  },
  {
    title: 'Ant Design Title 2',
    createdAt: new Date(),
  },
  {
    title: 'Ant Design Title 3',
    createdAt: new Date(),
  },
  {
    title: 'Ant Design Title 4',
    createdAt: new Date(),
  },
];

const ListComponent: React.FC = () => {
  const todayData = getDateInfo(new Date());

  return (
    <List
      header={
        <Title level={3}>
          <Row>
            <Col span={8}>
              {todayData.date}/{todayData.month}/{todayData.year}
            </Col>
            <Col span={4} offset={12} style={{ display: 'flex', justifyContent: 'right' }}>
              <Text type="secondary">{todayData.day}</Text>
            </Col>
          </Row>
        </Title>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.title}
            description={<Text type="secondary">{item.createdAt.toLocaleDateString()}</Text>}
          />
          {/* <Typography.Text mark>[ITEM]</Typography.Text> {item} */}
        </List.Item>
      )}
    />
  );
};

export default ListComponent;
