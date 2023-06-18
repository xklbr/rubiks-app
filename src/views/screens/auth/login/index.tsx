import AuthLayout from 'views/layouts/auth.layout';
import LoginForm from 'views/forms/auth/login';

const AuthLoginPage = () => (
  <AuthLayout headTitle="Login" title="Sign in to your account" dark>
    <LoginForm />
  </AuthLayout>
);

export default AuthLoginPage;
