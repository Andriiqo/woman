import dayjs from 'dayjs';

export const convertDateToBackend = (date: string): string => dayjs(date).format('YYYY-MM-DD');