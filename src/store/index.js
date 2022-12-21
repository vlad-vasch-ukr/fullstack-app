import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { listsApi } from '../services/lists';

const rootReducer = combineReducers({
  [listsApi.reducerPath]: listsApi.reducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, listsApi.middleware),
});
