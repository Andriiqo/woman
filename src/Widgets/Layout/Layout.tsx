import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

export const Layout = () => {
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
