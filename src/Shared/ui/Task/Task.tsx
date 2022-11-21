import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import {Task as TaskProps} from '../../../Entities/types/task.type';

const Wrapper = styled(Link)`
  padding: 1rem;
  width: 100%;
  display: flex;
  color: inherit;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: all ease 0.3s;

  &:hover {
    color: var(--hover-color);
    border-color: inherit;
  }
`;


export const Task: FC<TaskProps> = ({id, title, stardDate, endDate, status}) => {
  return (
    <Wrapper to={'task/'+ id}>{title}</Wrapper>
  );
};
