import { Dispatch, FC, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Modal as ModalUI } from '@mui/material';
import {Form} from '..';
import { Task } from '../../../Entities/types/task.type';

const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    background-color: var(--main-bg-color);
`;

interface ModalProps {
    isOpen: boolean;
    toggleModal: Dispatch<SetStateAction<boolean>>
    isNewTask?: boolean;
    task?: Task;
}   

export const Modal: FC<ModalProps> = ({isOpen, toggleModal, isNewTask, task}) => {

  return (
    <ModalUI
      open={isOpen}
      onClose={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContent>
        <Form toggleModal={toggleModal} isNewTask={isNewTask} task={task}/>
      </ModalContent>
    </ModalUI>
  );
};
