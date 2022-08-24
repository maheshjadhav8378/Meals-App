import {configureStore} from '@reduxjs/toolkit';

import mealsReducer from './mealsSlice';

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
