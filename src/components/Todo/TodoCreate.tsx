import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

import { ITodoCreateProps } from '../../types/todo.types';

const StyledForm = styled(Form)`
  margin-bottom: 2rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTodoInput = styled(Input)`
  padding: 1rem 3rem;
  margin-bottom: 0.5rem;
`;

const TodoCreate: React.FC<ITodoCreateProps> = ({ onCreate, isLoading }) => {
  const [input, setInput] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmitForm = () => {
    onCreate({ title: input });
    setInput('');
  };

  return (
    <StyledForm layout="vertical" onFinish={onSubmitForm}>
      <Flex>
        <StyledTodoInput placeholder="Add a task..." value={input} onChange={onChange} />
        <Button type="primary" disabled={!input} loading={isLoading} htmlType="submit" role="button">
          +
        </Button>
      </Flex>
    </StyledForm>
  );
};

export default TodoCreate;
