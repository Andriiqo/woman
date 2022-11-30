import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { convertDateToBackend, mappingArrayToHash } from '../../Features';
import { getTasks } from '../../Shared/api/task/task';
import { Files, Task } from '../types/task.type';
import { InitialState } from './types';

export const getAllTask = createAsyncThunk<{tasks: Task[], length: number}, void, {rejectValue: string}>(
  'tasks/all',
  async (_, {rejectWithValue}) => {
    const response = await getTasks();

    if(response.status !== 200) {
      return rejectWithValue(`Error! ${response}`);
    }

    return response.data.data;
  }, 
);

const initialState: InitialState = {
  loading: false,
  data: {},
  length: 0,
  error: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask(state, action) {
      const taskId = uuid();
  
      state.data[taskId] = {
        id: taskId,
        title: action.payload.title,
        text: action.payload.text,
        status: 'progress',
        startDate: convertDateToBackend(action.payload.startDate),
        endDate: convertDateToBackend(action.payload.endDate),
        files: mappingArrayToHash(action.payload.files),
      };
    },
    updateTaskAllFields(state, action) {
      state.data[action.payload.id] = {
        ...action.payload,
        status: 'progress',
        startDate: convertDateToBackend(action.payload.startDate),
        endDate: convertDateToBackend(action.payload.endDate),
        files: {
          ...state.data[action.payload.id].files, 
          ...mappingArrayToHash(action.payload.files),
        },
      };
    },
    updateTaskStatus(state, action) {
      state.data[action.payload.id].status === 'complited' 
        ? state.data[action.payload.id].status = 'progress' 
        : state.data[action.payload.id].status = 'complited';
    },
    deleteTask(state, action) {
      delete state.data[action.payload.id];
    },
    deleteImage(state, action) {
      delete state.data[action.payload.taskId].files[action.payload.fileId];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTask.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllTask.fulfilled, (state, action) => {
      // мэпим хеш-таблицу стора для дальнейшего константого доступа из редакса
      action.payload.tasks.map((task) => state.data = {...state.data, [task.id]: task});
      state.length = action.payload.length;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getAllTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { createTask, updateTaskStatus, deleteTask, updateTaskAllFields, deleteImage } = tasksSlice.actions;

export default tasksSlice.reducer;