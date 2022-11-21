import { Dispatch, FC, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Typography, Modal as ModalUI } from '@mui/material';

const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    background-color: var(--main-bg-color);
`;

interface ModalProps {
    isOpen: boolean;
    toggleModal: Dispatch<SetStateAction<boolean>>
}   

export const Modal: FC<ModalProps> = ({isOpen, toggleModal}) => {


  return (
    <ModalUI
      open={isOpen}
      onClose={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContent>
        <Typography id="spring-modal-title" variant="h6" component="h2">
             ModalContent Text in a modal
        </Typography>
        <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </ModalContent>
    </ModalUI>
  );
};
