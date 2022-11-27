import { FC } from 'react';
import { Typography } from '@mui/material';

interface InfoTextProps {
    text: string;
    mt?: string;
  };
  
export const InfoText: FC<InfoTextProps> = ({text, mt}) => {
  return (
    <Typography mt={mt} variant="h5" component="h4">
      {text}
    </Typography>
  );
};
