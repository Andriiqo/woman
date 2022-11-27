import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { useAppDispatch } from '../../App/hook/useApp';
import { getAllTask } from '../../Entities/sclise/tasksSlice';

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--main-bg-color);
`;

const MainContent = styled.main`
  flex: 1;
`;

export const Layout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);

  return (
    <Wrapper>
      <Header/>
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer/>
    </Wrapper>
  );
};
