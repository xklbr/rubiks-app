import { ReactNode } from 'react';

type ButtonProperties = {
  submit?: boolean;
  render?: string | ReactNode;
  size?: 'xs' | 'md' | 'lg' | 'xl';
  buttonStyle?:
    | 'text'
    | 'primary'
    | 'danger'
    | 'cancel'
    | 'primaryText'
    | 'warningText'
    | 'dangerText'
    | 'icon';
  variant?: string;
  disabled?: boolean;
  onClick?: () => void;
  ref?: any;
};

const sizes = {
  xs: 'text-xs px-2 py-1',
  md: 'text-sm px-2.5 py-1.5',
  lg: 'text-sm px-3 py-2',
  xl: 'text-sm px-3.5 py-2.5 w-full',
};

const styleButton = {
  text: 'bg-white/10 hover:bg-white/20 rounded-md font-semibold text-gray-200 shadow-sm',
  primaryText: 'text-sky-400 hover:text-sky-500',
  warningText: 'text-amber-400 hover:text-amber-500',
  dangerText: 'text-rose-400 hover:text-rose-500',
  icon: 'text-gray-200 hover:text-white',
  primary:
    'inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:col-start-2',
  danger:
    'inline-flex w-full justify-center rounded-md bg-rose-600 px-3 py-2 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 sm:col-start-2',
  cancel:
    'mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-white/20 hover:bg-white/20 sm:col-start-1 sm:mt-0',
};

const Button = ({
  submit,
  render,
  size = 'md',
  variant,
  disabled,
  buttonStyle = 'text',
  onClick,
  ref,
}: ButtonProperties) => {
  const baseClass = `text-sm font-semibold ${sizes[size]} ${styleButton[buttonStyle]} ${variant}`;

  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={baseClass}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
    >
      {render}
    </button>
  );
};

export default Button;
