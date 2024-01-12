import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { IChildrenProps } from '../../types/genericTypes';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerRow = styled(Row)`
  width: 100%;
`;

const Layout: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  return (
    <Container>
      <ContainerRow>
        <Col xs={0} sm={2} md={4} lg={6} xl={8}></Col>
        <Col xs={24} sm={20} md={16} lg={12} xl={8}>
          {children}
        </Col>
        <Col xs={0} sm={2} md={4} lg={6} xl={8}></Col>
      </ContainerRow>
    </Container>
  );
};

export default Layout;
