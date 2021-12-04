import { configureStore } from '@reduxjs/toolkit';

import { authReducer, serviceReducer } from './slices';

const store = configureStore({
  reducer: {
    auth: authReducer,
    services: serviceReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware), this one is only for RTK Query
});

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;

export default store;
