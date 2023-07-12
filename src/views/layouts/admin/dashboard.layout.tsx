import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

import { authLogout } from 'modules/auth/actions';

import Logo from 'assets/images/logo.svg';
import { navigation } from './config';

type AdminDashboardLayoutProperties = {
  headTitle: string;
  children?: ReactNode;
};

const AdminDashboardLayout = ({
  headTitle,
  children,
}: AdminDashboardLayoutProperties) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authLogout());
  };

  return (
    <>
      <title>{`Rubiks - ${headTitle}`}</title>
      <div>
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img className="h-10 w-auto" src={Logo} alt="Logo" />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <NavLink
                          activeClassName="bg-gray-800 text-white"
                          to={item.to}
                          className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <button
                    onClick={logout}
                    type="button"
                    className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 p-2 text-sm leading-6 w-full"
                  >
                    <ArrowRightOnRectangleIcon className="h-6 w-6 shrink-0" />
                    <span aria-hidden="true">Logout</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <main className="lg:pl-72 bg-gray-800">
          <div className="px-4 sm:px-6 lg:px-8 h-full py-10">{children}</div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboardLayout;
