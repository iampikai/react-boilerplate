import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './rootReducer';

const devMiddlewares = [logger];
const middlewares = [
  ...getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
];

if (process.env.NODE_ENV === 'development') {
  devMiddlewares.forEach((middleware) => {
    middlewares.push(middleware);
  });
}

const transform = createTransform(
  (inboundState) => inboundState,
  (outboundState) => outboundState,
  { whitelist: ['appReducer'] }
);
const persistConfig = {
  key: 'appReducer',
  storage,
  whitelist: ['appReducer'],
  transforms: [transform],
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});
const persistor = persistStore(store);

export { store, persistor };
