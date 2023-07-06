/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { Store } from 'redux';

import RoutesType from './interface';

type RouteCustomProperties = {
  store: Store;
};
type RouteWithSubRoutesProperties = RouteCustomProperties & RoutesType;

const RouteWithSubRoutes: FC<RouteWithSubRoutesProperties> = ({
  component: Component,
  exact,
  path,
  routes,
  store,
  ...rest
}) => {
  if (routes) {
    return (
      <Route
        exact={exact}
        path={path}
        render={(routeProperties: RouteComponentProps) => (
          <Component {...routeProperties} {...rest}>
            <Switch>
              {routes.map((route) => (
                <RouteWithSubRoutes key={route.path} store={store} {...route} />
              ))}
            </Switch>
          </Component>
        )}
      />
    );
  }

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProperties: RouteComponentProps) => (
        <Component {...routeProperties} {...rest} />
      )}
    />
  );
};

const RouteConfig: FC<{ routes: RoutesType[]; store: Store }> = ({
  routes,
  store,
}) => (
  <Switch>
    {routes.map((route) => (
      <RouteWithSubRoutes key={route.path} store={store} {...route} />
    ))}
  </Switch>
);

export default RouteConfig;
