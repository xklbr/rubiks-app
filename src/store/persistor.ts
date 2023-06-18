/* eslint-disable @typescript-eslint/no-explicit-any */
import storageSession from 'redux-persist/lib/storage/session';
import { PersistConfig } from 'redux-persist';
import localForage from 'localforage';

const isDebug = process.env.NODE_ENV !== 'production';

localForage.config({
  name: 'React Boilerplate',
  storeName: 'react-boilerplate',
});

export const rootPersistConfig: PersistConfig<any> = {
  key: 'root',
  storage: localForage,
  debug: isDebug,
  whitelist: [],
};

export const authPersistConfig: PersistConfig<any> = {
  key: 'auth',
  storage: storageSession,
  debug: isDebug,
  blacklist: ['auth'],
};
