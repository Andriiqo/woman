import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useAppSelector } from '../../../../App/hook/useApp';
import { parseDateToUILong } from '../../../../Features';
import { InfoText, ListImages } from '../..';

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

export const Detailed = () => {
  const {id} = useParams();
  const task = useAppSelector((state) => state.tasks.data[String(id)]);

  return (
    <Wrapper>
      <DateInfo>
        <TableContentDate>
          <InfoText text="Дата заведения задачи:"/>
          <InfoText text={task?.startDate ? parseDateToUILong(task.startDate) : 'Дата не выбрана'}/>
        </TableContentDate>
        <TableContentDate>
          <InfoText text="Дата окончания задачи:"/>
          <InfoText text={task?.endDate ?  parseDateToUILong(task.endDate) : 'Дата не выбрана'}/>
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
      <ListImages taskId={id || ''} list={task?.files || []}/>
    </Wrapper>
  );
};
