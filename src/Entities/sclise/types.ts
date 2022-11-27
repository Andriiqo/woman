import { Task } from '../types/task.type';

export type InitialState = {
    loading: boolean;
    data: Record<string, Task>;
    length: number;
    error: undefined | null | string;
}