/* eslint-disable jsx-a11y/label-has-associated-control */
import { Form, InjectedFormProps } from 'redux-form';
import { required, email } from 'redux-form-validators';

import TextField from 'components/fields/text-field';
import Button from 'components/button';

const UserEditForm = ({
  handleSubmit,
  invalid,
  pristine,
  submitting,
}: InjectedFormProps<{}>) => (
  <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center ui__h-90">
    <h2 className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
      Update User
    </h2>
    <Form onSubmit={handleSubmit} noValidate className=" w-1/3">
      <TextField className="hidden" name="id" />
      <label
        htmlFor="fullName"
        className="block text-sm font-medium leading-6 text-gray-400"
      >
        Full name
      </label>
      <div className="mt-2">
        <TextField
          id="fullName"
          name="fullName"
          type="text"
          validate={[required()]}
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
        />
      </div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-400 mt-4"
      >
        Email address
      </label>
      <div className="mt-2">
        <TextField
          id="email"
          name="email"
          type="email"
          validate={[required(), email()]}
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
        />
      </div>
      <label
        htmlFor="jobTitle"
        className="block text-sm font-medium leading-6 text-gray-400 mt-4"
      >
        Title
      </label>
      <div className="mt-2">
        <TextField
          id="jobTitle"
          name="jobTitle"
          type="text"
          validate={[required()]}
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <Button
          render="Update"
          size="xl"
          buttonStyle="primary"
          submit
          disabled={invalid || pristine || submitting}
          variant="mt-10"
        />
      </div>
    </Form>
  </div>
);

export default UserEditForm;
