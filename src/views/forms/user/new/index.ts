import { reduxForm } from 'redux-form';
import { push } from 'connected-react-router';

import { bindedCreateUser } from 'modules/users/actions';

import UserNewForm from './form';

export default reduxForm({
  form: 'user-new',
  enableReinitialize: true,
  onSubmit: bindedCreateUser,
  onSubmitSuccess: (_, dispatch) => {
    dispatch(push('/admin/users'));
  },
})(UserNewForm);
