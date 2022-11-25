import { FC, useEffect, useState } from 'react';
import { UseFormRegister, UseFormSetValue, UseFormGetValues } from 'react-hook-form';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Fields } from '../Form/Form';

interface CalendarProps {
  title: string,
  register: UseFormRegister<Fields>,
  registerName: 'startDate' | 'endDate',
  getValues: UseFormGetValues<Fields>,
  setValue: UseFormSetValue<Fields>,
}

export const Calendar: FC<CalendarProps> = ({title, registerName, register, getValues, setValue}) => {
  const [date, setDate] = useState<string>(getValues(registerName));
    
  const chengeDate = (newValue: string) => {
    setDate(String(newValue));
    setValue(registerName, date as string, { shouldValidate: true, shouldDirty: true});
  };

  useEffect(() => {
    setValue(registerName, date);
  }, [date, registerName, setValue]);

  return (
    <>
      <p>{title}</p>
      <div style={{marginBottom: '1.75rem'}}>
        <DatePicker
          value={date}
          onChange={(newValue) => chengeDate(String(newValue))}
          renderInput={(params) => <TextField {...params} {...register(registerName)} />}
        />
      </div>
    </>
  );
};