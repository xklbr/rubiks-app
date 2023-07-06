import { reduxForm } from 'redux-form';
import { push } from 'connected-react-router';

import { bindedUpdateUser } from 'modules/users/actions';

import UserEditForm from './form';

export default reduxForm({
  form: 'user-edit',
  enableReinitialize: true,
  onSubmit: bindedUpdateUser,
  onSubmitSuccess: (_, dispatch) => {
    dispatch(push('/admin/users'));
  },
})(UserEditForm);
