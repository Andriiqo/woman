import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../../../App/hook/useApp';
import { updateTaskStatus, deleteTask } from '../../../../Entities/sclise/tasksSlice';
import { Task as TaskProps, TaskStatus } from '../../../../Entities/types/task.type';
import { parseDateToUIShort } from '../../../../Features';


const Wrapper = styled.div`
  padding: 0.5rem 1rem;
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

const LinkTask = styled(Link)<{status: string}>`
  display: flex;
  color: ${props => props.status === 'failed' ? 'var(--error-color)' : 'inherit'};
  text-decoration: ${props => props.status === 'progress' ? 'none' : 'line-through'};

  &:hover {
    color:  ${props => props.status === 'failed' ? 'var(--error-color)' : 'var(--hover-color)'};
  }
`;

const DataInfo = styled.p`
  margin-right: 1rem;
  color: inherit;
`;

const StatusInfo = styled.div`
  display: flex;
`;

export const Task: FC<TaskProps> = ({id, title, startDate, endDate, status}) => {
  const dispatch = useAppDispatch();

  const onChangeCheckbox = (id: string, status: TaskStatus) => {
    dispatch(updateTaskStatus({id, status}));
  };

  const onDelete = (id: string) => {
    dispatch(deleteTask({id}));
  };

  return (
    <Wrapper> 
      <LinkTask 
        to={'task/'+ id} status={status}>
        <DataInfo>{parseDateToUIShort(startDate)}</DataInfo>
        <DataInfo>{parseDateToUIShort(endDate)}</DataInfo>
        <p>{title}</p>
      </LinkTask>
      <StatusInfo>
        {status === 'failed' 
          ? <Checkbox disabled checked/>
          : <Checkbox 
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
