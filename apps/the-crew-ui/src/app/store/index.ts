import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './reducers';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
