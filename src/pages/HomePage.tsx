import React from 'react';

import Todo from '../components/Todo/Todo';

import { ITodoItem } from '../types/components/todoTypes';

const HomePage: React.FC = () => {
  const data: ITodoItem[] = [
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

  return (
    <>
      <Todo data={data} />
    </>
  );
};

export default HomePage;
