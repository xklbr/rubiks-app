import { ReactNode } from 'react';

type AuthLayoutProperties = {
  headTitle: string;
  title?: string;
  children?: ReactNode;
  dark?: boolean;
};

const AuthLayout = ({
  children,
  title,
  headTitle,
  dark,
}: AuthLayoutProperties) => (
  <>
    <title>{`Rubiks - ${headTitle}`}</title>
    <section
      className={`${
        dark && 'bg-gray-900'
      } flex min-h-full h-screen flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8`}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          {title}
        </h2>
        <main className="">{children}</main>
      </div>
    </section>
  </>
);

export default AuthLayout;
