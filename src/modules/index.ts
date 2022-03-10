import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import selectedParams from './selectedParams';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['selectedParams'],
};

const rootReducer = combineReducers({ selectedParams });

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
