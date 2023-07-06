import AuthLayout from 'views/layouts/auth/auth.layout';
import LoginForm from 'views/forms/auth/login';

const AuthLoginPage = () => (
  <AuthLayout headTitle="Login" title="Login to your account" dark>
    <LoginForm />
  </AuthLayout>
);

export default AuthLoginPage;
