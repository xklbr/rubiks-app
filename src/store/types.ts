import { PersistPartial } from 'redux-persist/lib/persistReducer';
import { ReducerType } from './reducers';

export type RootState = ReducerType & PersistPartial;
