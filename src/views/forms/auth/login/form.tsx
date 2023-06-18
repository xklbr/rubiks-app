/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, InjectedFormProps } from 'redux-form';
import { required, email } from 'redux-form-validators';

import { isAuthLoading } from 'modules/auth/selectors';

import TextField from 'views/components/fields/text-field';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const LoginForm: FC<InjectedFormProps<{}>> = ({
  handleSubmit,
  invalid,
  pristine,
  submitting,
}) => {
  const loading = useSelector(isAuthLoading);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const showPasswordIcon = !showPassword ? (
    <EyeSlashIcon className="absolute right-5 h-6 w-6 text-gray-400" />
  ) : (
    <EyeIcon className="absolute right-5 h-6 w-6 text-gray-400" />
  );

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            Email address
          </label>
          <div className="mt-2">
            <TextField
              id="email"
              name="email"
              type="email"
              placeholder="email@mail.com"
              validate={[required(), email()]}
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-400"
            >
              Password
            </label>
          </div>
          <div className="relative flex items-center">
            <button
              type="button"
              className="flex items-center"
              onClick={toggleShowPassword}
            >
              {showPasswordIcon}
            </button>
            <TextField
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="123*yourpassword"
              validate={[required()]}
              showMessages={false}
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={loading || invalid || pristine || submitting}
            className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Sign in
          </button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
