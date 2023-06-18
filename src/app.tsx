import { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';

import Routes from 'routes';
import routesConfig from 'routes/config';
import { persistor, store } from 'store';
import history from 'store/history';

// import ScreenLoading from 'views/base-components/screen-loading';
import SdkLoader from 'views/components/sdk-loader';

const App: FC = () => (
  <Provider store={store}>
    <PersistGate loading="Loading" persistor={persistor}>
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
