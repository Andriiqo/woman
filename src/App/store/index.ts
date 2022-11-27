import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import tasksSlice from '../../Entities/sclise/tasksSlice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
  middleware: (customizedMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;