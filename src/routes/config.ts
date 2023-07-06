import Loadable from 'react-loadable';

import ScreenLoading from 'views/ui/screen-loading';

import { listUsers, retrieveUser } from 'modules/users/actions';
import { getUsersStats } from 'modules/dashboard/actions';

import RoutesType from './interface';

const Root = Loadable({
  loader: () => import('views/screens/auth/login'),
  // @ts-ignore
  loading: ScreenLoading,
});

const AdminContainer = Loadable({
  loader: () => import('views/layouts/admin/dashboard.layout'),
  // @ts-ignore
  loading: ScreenLoading,
});

const AdminDashboard = Loadable({
  loader: () => import('views/screens/admin/dashboard'),
  // @ts-ignore
  loading: ScreenLoading,
});

const AdminUsers = Loadable({
  loader: () => import('views/screens/admin/users'),
  // @ts-ignore
  loading: ScreenLoading,
});

const AdminUserEdit = Loadable({
  loader: () => import('views/screens/admin/users/edit'),
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
    path: '/admin',
    component: AdminContainer,
    privated: true,
    exact: true,
  },
  {
    path: '/admin/dashboard',
    component: AdminDashboard,
    privated: true,
    exact: true,
    actions: [getUsersStats],
  },
  {
    path: '/admin/users',
    component: AdminUsers,
    privated: true,
    exact: true,
    actions: [listUsers],
  },
  {
    path: '/admin/users/:id/edit',
    component: AdminUserEdit,
    privated: true,
    exact: true,
    actions: [retrieveUser],
  },
  {
    name: '404',
    path: '*',
    component: () => null,
  },
];

export default routes;
export { routes };
