import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { postsReducer } from './posts';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
];

const store = configureStore({
  reducer: {
    posts: postsReducer
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development'
});

const persistor = persistStore(store);

export { store, persistor };
