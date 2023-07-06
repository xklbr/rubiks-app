import { ChartPieIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'Dashboard', to: '/admin/dashboard', icon: HomeIcon },
  {
    name: 'Users',
    to: '/admin/users',
    icon: UsersIcon,
  },
  {
    name: 'Reports',
    to: '/admin/dashboard/reports',
    icon: ChartPieIcon,
  },
];

export const userNavigation = [
  { name: 'Your profile', to: '#' },
  { name: 'Sign out', to: '#' },
];
