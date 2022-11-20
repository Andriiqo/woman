import React from 'react';
import styled from '@emotion/styled';
import { Pagination } from '@mui/material';

const Wrapper = styled.footer`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Pagination count={1} />
    </Wrapper>
  );
};
