import { Dispatch, SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Modal } from '../../Shared/ui';
import { useParams } from 'react-router-dom';


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
  const [openModalNew, setOpenModalNew] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const {id} = useParams();

  const isNewTask = !id;

  const toggleModal = (openModal: boolean, setOpenModal: Dispatch<SetStateAction<boolean>>) => {
    setOpenModal(!openModal);
  };

  return (
    <Wrapper>
      <Typography variant="h4" component="h1">
        Список дел
      </Typography>
      {isNewTask 
        ? <Button 
          onClick={() => toggleModal(openModalNew, setOpenModalNew)} 
          variant="contained">
            Добавить задачу
        </Button>
        : <Button 
          onClick={() => toggleModal(openModalNew, setOpenModalNew)} 
          variant="contained">
          Редактировать
        </Button>
      }
      <Modal isOpen={openModalNew} toggleModal={setOpenModalNew} isNewTask={isNewTask}/>
      <Modal isOpen={openModalEdit} toggleModal={setOpenModalEdit} isNewTask={isNewTask}/>
    </Wrapper>
  );
};
