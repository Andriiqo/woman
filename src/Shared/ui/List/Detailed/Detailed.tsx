import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useAppSelector } from '../../../../App/hook/useApp';
import { Modal } from '../..';

const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const DateInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const TableContentDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;


interface InfoTextProps {
  text: string;
  mt?: string;
};

const InfoText: FC<InfoTextProps> = ({text, mt}) => {
  return (
    <Typography mt={mt} variant="h5" component="h4">
      {text}
    </Typography>
  );
};

export const Detailed = () => {
  const {id} = useParams();
  const task = useAppSelector((state) => state.tasks.data.find((task => task.id === id)));
  const [openModalEdit, setOpenModalNew] = useState<boolean>(false);

  return (
    <>
      <Wrapper>
        <Button onClick={() => setOpenModalNew(true)} variant="contained">Редактировать</Button>
        <DateInfo>
          <TableContentDate>
            <InfoText text="Дата заведения задачи:"/>
            <InfoText text={task?.startDate ? task.startDate : 'Дата не выбрана'}/>
          </TableContentDate>
          <TableContentDate>
            <InfoText text="Дата окончания задачи:"/>
            <InfoText text={task?.endDate ? task.endDate : 'Дата не выбрана'}/>
          </TableContentDate>
        </DateInfo>
        <TableContentDate>
          <InfoText mt="2rem" text="Название"/>
          <InfoText text={task?.title || 'Заголовок не указан'}/>
        </TableContentDate>
        <TableContentDate>
          <InfoText mt="2rem" text="Описание"/>
          <InfoText text={task?.text || 'Описание отсутствует'}/>
        </TableContentDate>
        <InfoText mt="3rem" text="Приклепленные файлы:"/>
        {!!task?.files?.length && task.files.map((file) => (
          <div key={file}>{file}</div>
        ))}
      </Wrapper>
      <Modal isOpen={openModalEdit} toggleModal={setOpenModalNew} task={task}/>
    </>
  );
};
