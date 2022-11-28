export type TaskStatus = 'complited' | 'progress' | 'failed';

export type FileImage = {
    id: string,
    file: string,
}

export type Files = Record<string, FileImage>;

export type Task = {
    id: string;
    title: string;
    text?: string;
    status: TaskStatus;
    startDate: string;
    endDate: string;
    files: Files; 
}
