import React from 'react';
import { Row, Col } from 'antd';

import { ChildrenProps } from '../../types/commonTypes';

const Layout: React.FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh' }}>
      <Row style={{ width: '100%' }}>
        <Col xs={0} sm={2} md={4} lg={6} xl={8}></Col>
        <Col xs={24} sm={20} md={16} lg={12} xl={8}>
          {children}
        </Col>
        <Col xs={0} sm={2} md={4} lg={6} xl={8}></Col>
      </Row>
    </div>
  );
};

export default Layout;
