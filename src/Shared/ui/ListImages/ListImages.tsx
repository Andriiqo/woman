import { Dispatch, FC } from 'react';
import styled from '@emotion/styled';
import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../../App/hook/useApp';
import { InfoText } from '..';
import { deleteImage } from '../../../Entities/sclise/tasksSlice';
import { Files } from '../../../Entities/types/task.type';

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 120px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 100%;
`;

interface ListImagesProps {
  list: Files,
  taskId?: string,
  formFieldDelete?: (T?: any) => void,
}

export const ListImages: FC<ListImagesProps> = ({list = {}, taskId = '', formFieldDelete}) => {
  const dispatch = useAppDispatch();

  const onDelete = (fileId: string, taskId: string) => {
    // если нету taskId и передана функция "formFieldDelete" значит мы находимся в модальном окне
    if (!taskId && formFieldDelete) {
      formFieldDelete();
      return;
    }
    dispatch(deleteImage({taskId, fileId}));
  };

  if(!Object.entries(list).length) {
    return (
      <>
        <InfoText mt="3rem" text="Приклепленные файлы:" />
        <Typography variant="h5" component="h2">
        Прикрепленных файлов нет
        </Typography>
      </>
    );
  };

  return (
    <>
      <InfoText mt="3rem" text="Прикрепленные файлы:" />
      <ImageContainer>
        {
          Object.values(list).map(file => (
            <ImageWrapper key={file.id}>
              <IconButton 
                onClick={() => onDelete(file.id, taskId)} 
                color="error"
                style={{position: 'absolute', top: '0.2rem', right: '0.2rem'}}
              >
                <DeleteIcon/>
              </IconButton>
              <Image src={file.file} alt={file.file} />
            </ImageWrapper> 
          ))
        }
      
      </ImageContainer></>
  );
};
