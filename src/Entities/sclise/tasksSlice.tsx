import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { convertDateToBackend } from '../../Features';
import { getTasks } from '../../Shared/api/task/task';
import { Task } from '../types/task.type';
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
  data: [],
  length: 0,
  error: undefined,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask(state, action) {
      state.data = [
        ...state.data,
        {
          id: uuid(),
          title: action.payload.title,
          text: action.payload.text,
          status: 'progress',
          startDate: convertDateToBackend(action.payload.startDate),
          endDate: convertDateToBackend(action.payload.endDate),
          files: [],
        },
      ];
    },
    updateTaskAllFields(state, action) {
      state.data = state.data.map((task) => {
        if (task.id === action.payload.id) {
          return ({
            ...task,
            ...action.payload,
            startDate: convertDateToBackend(action.payload.startDate),
            endDate: convertDateToBackend(action.payload.endDate),
          });
        }
        return task;
      });
    },
    updateTaskStatus(state, action) {
      state.data = state.data.filter((task) => 
        task.id === action.payload.id 
          ? (task.status === 'complited' ? task.status = 'progress' : task.status = 'complited') 
          : task,
      );
    },
    deleteTask(state, action) {
      state.data = state.data.filter((task) => task.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTask.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getAllTask.fulfilled, (state, action) => {
      state.data = action.payload.tasks;
      state.length = action.payload.length;
      state.loading = false;
    });
    builder.addCase(getAllTask.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { createTask, updateTaskStatus, deleteTask, updateTaskAllFields } = tasksSlice.actions;

export default tasksSlice.reducer;