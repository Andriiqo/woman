export type TaskStatus = 'complited' | 'progress' | 'failed';

export type Task = {
    id: string;
    title: string;
    text?: string;
    status: TaskStatus;
    startDate: string;
    endDate: string;
    files?: any[]; 
}
