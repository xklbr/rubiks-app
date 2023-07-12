import AdminDashboardLayout from 'views/layouts/admin/dashboard.layout';

import UserNewForm from 'views/forms/user/new';

const UsersPage = () => (
  <AdminDashboardLayout headTitle="New User">
    <UserNewForm />
  </AdminDashboardLayout>
);

export default UsersPage;
