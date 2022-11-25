import { Dispatch, FC, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { locale } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../../App/hook/useApp';
import { createTask, updateTaskAllFields } from '../../../Entities/sclise/tasksSlice';
import { Task } from '../../../Entities/types/task.type';
import { Calendar } from '..';

const Wrapper = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export type Fields = {
  title: string,
  text: string,
  startDate: string,
  endDate: string,
};

interface FormProps {
  toggleModal: Dispatch<SetStateAction<boolean>>, 
  isNewTask?: boolean,
  task?: Task;
}

export const Form: FC<FormProps> = ({toggleModal, isNewTask, task}) => {

  const dispatch = useAppDispatch();
  const { register, getValues, setValue, handleSubmit, formState: { errors } } = useForm<Fields>({
    defaultValues: !isNewTask ? {
      title: task?.title,
      text: task?.text,
      startDate: task?.startDate,
      endDate: task?.endDate,
    } : {},
  });

  const onSubmit: SubmitHandler<Fields> = (data) => {
    if (isNewTask) {
      dispatch(createTask(data));
    } else {
      dispatch(updateTaskAllFields({id: task?.id, ...data}));
    }
    toggleModal(false);
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale('ru')}>
        <Calendar 
          title="Дата начала"
          getValues={getValues}
          setValue={setValue}
          registerName="startDate" 
        />
        <Calendar
          title="Дата начала"
          getValues={getValues}
          setValue={setValue} 
          registerName="endDate" 
        /> 
      </LocalizationProvider>
      <TextField label="Заголовок" variant="outlined" {...register('title', { required: true })}/>
      <p style={{color: errors.title ? 'var(--error-color)' : 'transparent', margin: '0.25rem 0'}}>
        Укажите заголовок!
      </p>
      <TextField style={{marginBottom: '1.75rem'}} label="Описание" variant="outlined" {...register('text')}/>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Button type="submit" variant="contained" style={{maxWidth: '12rem'}}>
          {isNewTask ? 'Создать' : 'Сохранить'}
        </Button>
        <Button onClick={() => toggleModal(false)} variant="contained" style={{maxWidth: '12rem'}}>
          Отмена
        </Button>
      </div>
    </Wrapper>
  );
};
