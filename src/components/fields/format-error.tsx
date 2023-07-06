import { FC } from 'react';

type FormatErrorProperties = {
  name: string;
  error: string | string[];
};

const FormatError: FC<FormatErrorProperties> = ({ name, error }) => (
  <>
    This field {name} {typeof error === 'string' ? error : error?.join(' & ')}
  </>
);

export default FormatError;
