import Loadable from 'react-loadable';
import ScreenLoading from 'views/ui/screen-loading';
import RoutesType from './interface';

const Root = Loadable({
  loader: () => import('views/screens/auth/login'),
  // @ts-ignore
  loading: ScreenLoading,
});

const routes: RoutesType[] = [
  {
    path: '/',
    component: Root,
    exact: true,
  },
  {
    path: '/login',
    component: Root,
    exact: true,
    published: true,
  },
  {
    name: '404',
    path: '*',
    component: () => null,
  },
];

export default routes;
export { routes };
