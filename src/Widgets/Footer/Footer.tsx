import React from 'react';
import styled from '@emotion/styled';
import { Pagination } from '@mui/material';

const Wrapper = styled.footer`
    width: 100%;
    height: var(--size-height);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0.5rem #ccc;
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Pagination count={1} />
    </Wrapper>
  );
};
