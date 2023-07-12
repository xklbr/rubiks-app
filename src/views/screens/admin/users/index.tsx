import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Column } from 'react-table';

import { getUsersItems, isUserLoading } from 'modules/users/selectors';

import AdminDashboardLayout from 'views/layouts/admin/dashboard.layout';
import TableList from 'components/table';
import {
  CellUserActions,
  CellLinkForUser,
} from 'components/table/config/cells';
import EmptyState from 'components/empty-state';
import EmptyStateUserImage from 'assets/images/empty-state-user.svg';

import { UserType } from 'types/user';
import ScreenLoading from 'views/ui/screen-loading';

const UsersPage = () => {
  const loading = useSelector(isUserLoading);
  const users = useSelector(getUsersItems);

  const hiddenColumns = ['id'];
  const columns = useMemo(
    () =>
      [
        {
          Header: 'id',
          accessor: 'id',
          id: 'id',
        },
        {
          Header: 'Name',
          accessor: 'fullName',
          Cell: CellLinkForUser,
        },
        {
          Header: 'Title',
          accessor: 'jobTitle',
        },
        {
          Header: 'Email',
          accessor: 'email',
        },
        {
          Header: 'Role',
          accessor: 'roles',
        },
        {
          Header: 'Status',
          accessor: 'status',
          // padding: 0,
        },
        {
          Header: '',
          accessor: 'actions',
          Cell: CellUserActions,
        },
      ] as Column<UserType>[],
    [],
  );

  return (
    <>
      <AdminDashboardLayout headTitle="Users">
        {loading ? (
          <div className="h-screen">
            <ScreenLoading />
          </div>
        ) : users.length === 0 ? (
          <EmptyState
            image={EmptyStateUserImage}
            title="Users not found"
            description="No users created to show"
          />
        ) : (
          <TableList
            title="Users"
            description="A list of all the users in your account."
            data={users}
            columns={columns}
            hiddenColumns={hiddenColumns}
            buttonTitle="Add user"
          />
        )}
      </AdminDashboardLayout>
    </>
  );
};

export default UsersPage;
