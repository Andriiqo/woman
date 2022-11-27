import { FC } from 'react';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../../App/hook/useApp';
import { InfoText } from '..';
import { deleteImage } from '../../../Entities/sclise/tasksSlice';

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 200px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

interface ListImagesProps {
  list: Blob[] | String[] | [],
  taskId: string,
  // file: string,
}

export const ListImages: FC<ListImagesProps> = ({list, taskId}) => {

  const dispatch = useAppDispatch();

  return (
    <>
      <InfoText mt="3rem" text="Приклепленные файлы:" />
      <ImageContainer>
        {!!list.length && list.map((file) => (
          <ImageWrapper key={String(file)}>
            <IconButton 
              onClick={() => dispatch(deleteImage({taskId, file}))} 
              color="error"
              style={{position: 'absolute', top: '0.2rem', right: '0.2rem'}}
            >
              <DeleteIcon/>
            </IconButton>
            <Image src={String(file)} alt={String(file)} />
          </ImageWrapper>
        ))}
      </ImageContainer></>
  );
};
