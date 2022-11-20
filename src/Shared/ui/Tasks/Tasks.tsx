import React from 'react';
import styled from '@emotion/styled';
import { Task } from '../Task/Task';

const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
  min-height: calc(100vh - 8rem);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Tasks = () => {

  const lengt = [10];

  return (
    <Wrapper>
      {lengt.map(task => <Task key={task} />)}
    </Wrapper>
  );
};
