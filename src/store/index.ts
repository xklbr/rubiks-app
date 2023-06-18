import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { history } from './history';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
const enhancers = [applyMiddleware(...middlewares)];
const store = createStore(reducers, composeWithDevTools(...enhancers));
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

type AppDispatch = typeof store.dispatch;
type StoreType = typeof store;

export { store, persistor };
export type { AppDispatch, StoreType };
