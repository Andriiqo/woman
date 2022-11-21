import { useState } from 'react';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Modal } from '../../Shared/ui';


const Wrapper = styled.header`
  padding: 0 1rem;
  width: 100%;
  height: var(--size-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-bg-color);
  box-shadow: 0 0 0.5rem #ccc;
`;

export const Header = () => {

  const [openModal, setOpenModal] = useState<boolean>(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Wrapper>
      <Typography variant="h4" component="h1">
        Список дел
      </Typography>
      <Button onClick={toggleModal} variant="contained">Добавить задачу</Button>
      <Modal isOpen={openModal} toggleModal={toggleModal}/>
    </Wrapper>
  );
};
