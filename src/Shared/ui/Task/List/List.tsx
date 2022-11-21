import styled from '@emotion/styled';
import { CircularProgress, Typography } from '@mui/material';
import { useAppSelector } from '../../../../App/hook/useApp';
import { Task } from '../Task';

const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
  min-height: calc(100vh - (var(--size-height) * 2));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const List = () => {
  const {data, loading} = useAppSelector((state) => state.tasks);

  if(loading) {
    return (
      <Wrapper>
        <CircularProgress size="4rem"/>
      </Wrapper>
    );
  }

  if(!data.length) {
    return (
      <Wrapper>
        <Typography variant="h5" component="h2">
           Список дел пуст...
        </Typography>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {data.map(task => 
        <Task 
          key={task.id}
          id={task.id}
          stardDate={task.stardDate}
          endDate={task.endDate}
          status={task.status} 
          title={task.title}
        />,
      )}
    </Wrapper>
  );
};
