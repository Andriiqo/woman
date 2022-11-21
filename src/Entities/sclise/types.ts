import { Task } from '../types/task.type';

export type InitialState = {
    loading: boolean;
    data: Task[] | [];
    length: number;
    error: null | string;
}