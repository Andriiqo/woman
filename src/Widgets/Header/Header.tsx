import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';


const Wrapper = styled.header`
  padding: 0 1rem;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Typography variant="h4" component="h1">
        Список дел
      </Typography>
      <Button variant="contained">Добавить задачу</Button>
    </Wrapper>
  );
};
