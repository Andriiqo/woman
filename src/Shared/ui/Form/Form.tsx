import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { locale } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../App/hook/useApp';
import { createTask, updateTaskAllFields } from '../../../Entities/sclise/tasksSlice';
import { Calendar, ListImages } from '..';

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
  files: any,
};

interface FormProps {
  toggleModal: Dispatch<SetStateAction<boolean>>, 
  isNewTask?: boolean,
}

export const Form: FC<FormProps> = ({toggleModal, isNewTask}) => {
  const [filesImaga, setFilesImage] = useState<Blob[] | String[] | []>([]);
  const {id} = useParams();
  const task = useAppSelector((state) => state.tasks.data[String(id)]);
  const dispatch = useAppDispatch();

  const { register, getValues, setValue, watch, handleSubmit, formState: { errors } } = useForm<Fields>({
    defaultValues: !isNewTask ? {
      title: task?.title,
      text: task?.text,
      startDate: task?.startDate,
      endDate: task?.endDate,
      files: task.files,
    } : {},
  });


  // отслеживаем выбор изображений в форме
  useEffect(() => {
    const subscription = watch((value) => 
      setFilesImage(
        [...value.files].map((file: Blob | MediaSource) => URL.createObjectURL(file)),
      ));
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<Fields> = (data) => {
    if (isNewTask) {
      dispatch(createTask({...data, files: [...data.files]}));
    } else {
      dispatch(updateTaskAllFields({id: task?.id, ...data, files: [...data.files]}));
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
          title="Дата завершения"
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
      <div style={{width: '100%', display: 'flex', justifyContent: 'flex-start'}}>
        <Button type="submit" variant="contained" style={{maxWidth: '12rem'}}>
          {isNewTask ? 'Создать' : 'Сохранить'}
        </Button>
        <Button variant="contained" component="label" style={{maxWidth: '12rem', marginLeft: '1rem'}}>
        Прикрепить файл
          <input {...register('files')} hidden accept="image/*" multiple type="file" />
        </Button>
        <Button 
          onClick={() => toggleModal(false)} 
          variant="contained" 
          style={{maxWidth: '12rem', marginLeft: 'auto'}}>
          Отмена
        </Button>
      </div>
      <ListImages taskId={task.id} list={filesImaga}/>
    </Wrapper>
  );
};
