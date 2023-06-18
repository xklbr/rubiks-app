import { reduxForm } from 'redux-form';

import { bindedAuthLogin } from 'modules/auth/actions';

import LoginForm from './form';

export default reduxForm({
  form: 'login',
  onSubmit: bindedAuthLogin,
})(LoginForm);
