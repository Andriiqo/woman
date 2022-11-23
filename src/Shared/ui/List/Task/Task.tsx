import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../../../App/hook/useApp';
import { updateTaskStatus, deleteTask } from '../../../../Entities/sclise/tasksSlice';
import {Task as TaskProps, TaskStatus} from '../../../../Entities/types/task.type';

const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all ease 0.2s;

  &:hover {
    border-color: var(--hover-color);
  }
`;

const LinkTask = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--hover-color);
  }
`;

const DataInfo = styled.p`
  margin-right: 1rem;
  color: inherit;
`;

const StatusInfo = styled.div`
  display: flex;
`;

export const Task: FC<TaskProps> = ({id, title, stardDate, endDate, status}) => {

  const dispatch = useAppDispatch();

  const onChangeCheckbox = (id: number, status: TaskStatus) => {
    dispatch(updateTaskStatus({id, status}));
  };

  const onDelete = (id: number) => {
    console.log(id)
    dispatch(deleteTask({id}));
  };

  return (
    <Wrapper> 
      <LinkTask to={'task/'+ id}>
        <DataInfo>{stardDate}</DataInfo>
        <DataInfo>{endDate}</DataInfo>
        <p>{title}</p>
      </LinkTask>
      <StatusInfo>
      
        {status === 'failed' 
          ? <Checkbox disabled checked/>
          : <Checkbox 
          // @ts-ignore
            onChange={() => onChangeCheckbox(id, status)} 
            checked={status === 'complited'} />
        }
        <IconButton onClick={() => onDelete(id)} color="error">
          <DeleteIcon/>
        </IconButton>
      </StatusInfo>
    </Wrapper>
  );
};
