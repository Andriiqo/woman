import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  loading: false,
  data: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default tasksSlice.reducer;