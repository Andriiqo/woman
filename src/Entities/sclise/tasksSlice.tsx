import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
  error: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTask.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllTask.fulfilled, (state, action) => {
      state.data = action.payload.tasks;
      state.length = action.payload.length;
      state.loading = false;
    });
    builder.addCase(getAllTask.rejected, (state, action) => {
      // @ts-ignore
      state.error = action;
      state.loading = false;
    });
  },
});

export default tasksSlice.reducer;