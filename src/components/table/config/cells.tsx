import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CellProps } from 'react-table';

import Button from 'components/button';
import ModalUserDisabled from 'components/modals/disabled-user';

import { UserType } from 'types/user';

export const CellLinkForUser = ({ row }: CellProps<UserType>) => (
  <Link
    className="hover:text-sky-500"
    to={`/admin/users/${row?.values?.id}/edit`}
  >
    {row?.values?.fullName}
  </Link>
);

export const CellUserActions = ({ row }: CellProps<UserType>) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <div className="text-right">
      <Link
        to={`/admin/users/${row?.values?.id}/edit`}
        className="text-sky-400 hover:text-sky-500 text-sm font-semibold"
      >
        Edit
      </Link>
      <Button buttonStyle="primaryText" onClick={toggleModal} render="Delete" />
      {isOpenModal && (
        <ModalUserDisabled
          userId={row?.values?.id}
          isOpen={isOpenModal}
          toggle={toggleModal}
        />
      )}
    </div>
  );
};
