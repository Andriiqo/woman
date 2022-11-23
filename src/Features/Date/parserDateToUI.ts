import dayjs from 'dayjs';
require('dayjs/locale/ru');

export const parseDateToUIShort = (date: string): string => dayjs(date).locale('ru').format('DD.MM.YYYY');

export const parseDateToUILong = (date: string): string => dayjs(date).locale('ru').format('DD MMMM YYYY');
