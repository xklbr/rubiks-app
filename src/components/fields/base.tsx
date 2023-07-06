/* eslint-disable react/no-unused-class-component-methods */
import { Component, ReactNode } from 'react';
import { WrappedFieldProps, BaseFieldProps } from 'redux-form';

import FormatError from './format-error';

export type BaseFieldCustomProperties = {
  id?: string;
  icon?: string;
  // eslint-disable-next-line unicorn/no-keyword-prefix
  className?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  children?: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
};

class BaseField<P = {}, S = {}> extends Component<
  BaseFieldProps & BaseFieldCustomProperties & WrappedFieldProps & P,
  S
> {
  isValue = () => {
    const {
      input: { value },
    } = this.props;
    return value?.length === 0;
  };

  isError = () => {
    const {
      meta: { touched, error },
    } = this.props;
    return !(!touched || !error);
  };

  errorMessageCheck = () => {
    const {
      input: { name },
      meta: { error },
    } = this.props;

    if (!error) return;

    // eslint-disable-next-line consistent-return
    return (
      <div>
        <FormatError name={name} error={error} />
      </div>
    );
  };

  errorMessage = () => {
    const {
      input: { name },
      meta: { touched, error },
    } = this.props;

    if (!touched || !error) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return (
      <div>
        <FormatError name={name} error={error} />
      </div>
    );
  };

  warningMessage = () => {
    const {
      input: { name },
      meta: { touched, error, warning },
    } = this.props;

    if (!touched || error || !warning) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return (
      <span className="">
        <FormatError name={name} error={error} />
      </span>
    );
  };
}

export default BaseField;
