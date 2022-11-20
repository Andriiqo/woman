import { Task } from '../../../Entities/types/task.type';

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Купить хлеб',
    text: 'Купить хлеба в магазине',
    status: 'complited',
    stardDate: '2022-11-20',
    endDate: '2022-11-20',
    files: [],
  },
  {
    id: 2,
    title: 'Купить молоко',
    text: 'Купить молоко на рынке',
    status: 'progress',
    stardDate: '2022-11-23',
    endDate: '2022-12-23',
    files: [],
  },
  {
    id: 3,
    title: 'Кино',
    text: 'Сходить в кино',
    status: 'failed',
    stardDate: '2022-10-10',
    endDate: '2022-10-11',
    files: [],
  },
];