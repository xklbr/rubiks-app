import { toast } from 'react-toastify';
import {
  CheckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const config = {
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
};

const iconType = (success: boolean) => {
  const toastClasses = `ui__toast${
    success ? ' ui__toast--success' : ' ui__toast--error'
  }`;

  return (
    <div className={toastClasses}>
      {success ? (
        <CheckIcon className="h-6 w-6 p-1 text-gray-100" />
      ) : (
        <ExclamationTriangleIcon className="h-6 w-6 p-1 text-gray-100" />
      )}
    </div>
  );
};

export const messageSuccess = (message: string) => {
  toast.success(message, {
    ...config,
    icon: iconType(true),
    toastId: message,
  });
};

export const messageError = (message: string) => {
  toast.error(message, { ...config, icon: iconType(false), toastId: message });
};
