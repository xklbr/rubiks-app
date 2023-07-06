import { useSelector } from 'react-redux';

import AdminDashboardLayout from 'views/layouts/admin/dashboard.layout';

import { getUserItem, isUserLoading } from 'modules/users/selectors';

import UserEditForm from 'views/forms/user/edit';

const UsersPage = () => {
  const loading = useSelector(isUserLoading);
  const user = useSelector(getUserItem);

  return (
    <AdminDashboardLayout headTitle="User Edit">
      {!loading && user && <UserEditForm initialValues={user} />}
    </AdminDashboardLayout>
  );
};

export default UsersPage;
