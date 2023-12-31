import { useSelector } from 'react-redux';

import AdminDashboardLayout from 'views/layouts/admin/dashboard.layout';
import CardReport from 'components/card-report';
import {
  getDashboardItems,
  isDashboardLoading,
} from 'modules/dashboard/selectors';
import ScreenLoading from 'views/ui/screen-loading';

const AdminPage = () => {
  const loading = useSelector(isDashboardLoading);
  const dashboardUsersStats = useSelector(getDashboardItems);

  return (
    <AdminDashboardLayout headTitle="Dashboard">
      <div className="ui__h-90">
        <h1 className="text-3xl font-semibold leading-6 text-gray-200 mb-10">
          Dashboard
        </h1>
        {loading ? (
          <ScreenLoading />
        ) : (
          <CardReport data={dashboardUsersStats} title="Users last 30 days" />
        )}
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminPage;
