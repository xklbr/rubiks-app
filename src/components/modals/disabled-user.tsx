import { Fragment, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import { disabledUser } from 'modules/users/actions';

import { MESSAGES } from 'utils/messages';
import Button from '../button';

type ModalProperties = {
  userId: string;
  toggle: () => void;
  isOpen: boolean;
};

const ModalUserDisabled = ({ userId, toggle, isOpen }: ModalProperties) => {
  const dispatch = useDispatch();

  const handleDisabled = () => {
    dispatch(disabledUser({ userId }));
    toggle();
  };

  const cancelButtonReference = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonReference}
        onClose={toggle}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ml-72">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-600">
                    <ExclamationTriangleIcon
                      className="h-6 w-6 text-gray-100"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-300"
                    >
                      Delete user
                    </Dialog.Title>
                    <div className="mt-2 text-gray-400">
                      {MESSAGES.USER_DELETE_ALERT}
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex">
                  <Button
                    render="Cancel"
                    buttonStyle="cancel"
                    onClick={toggle}
                    ref={cancelButtonReference}
                    variant="mr-2"
                  />
                  <Button
                    render="Confirm"
                    buttonStyle="danger"
                    onClick={handleDisabled}
                    variant="ml-2"
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalUserDisabled;
