import {configureStore} from '@reduxjs/toolkit';
import reposReducer from './repos/reducers';
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: reposReducer,
});
