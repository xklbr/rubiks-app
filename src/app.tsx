import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';

import Routes from 'routes';
import routesConfig from 'routes/config';
import { persistor, store } from 'store';
import history from 'store/history';

import ScreenLoading from 'views/ui/screen-loading';
import SdkLoader from 'components/sdk-loader';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<ScreenLoading />} persistor={persistor}>
      <SdkLoader>
        <ToastContainer />
        <ConnectedRouter history={history}>
          <Routes store={store} routes={routesConfig} />
        </ConnectedRouter>
      </SdkLoader>
    </PersistGate>
  </Provider>
);

export default App;
