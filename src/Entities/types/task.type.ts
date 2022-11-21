export type TaskStatus = 'complited' | 'progress' | 'failed';

export type Task = {
    id: number;
    title: string;
    text?: string;
    status: TaskStatus;
    stardDate: string;
    endDate: string;
    files?: any[]; 
}
