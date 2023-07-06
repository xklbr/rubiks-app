import { FC } from 'react';
import { Field, BaseFieldProps } from 'redux-form';
import classnames from 'classnames';

import BaseField, { BaseFieldCustomProperties } from './base';

type TextFieldProperties = {
  isIconsValidate?: boolean;
  showMessages?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
};

class RenderTextField extends BaseField<TextFieldProperties> {
  static defaultProps = {
    isIconsValidate: false,
    showMessages: false,
  };

  render() {
    const {
      input: inputProperties,
      isIconsValidate,
      showMessages,
      ...rest
    } = this.props;
    const isValue = this.isValue();
    const isError = this.isError();

    return (
      <>
        <input {...inputProperties} {...rest} />
        {isIconsValidate && !isValue && (
          <div
            className={classnames('', {
              correct: !isError,
              error: isError,
            })}
          >
            <i
              className={classnames({
                'icon-correct': !isError,
                'icon-error': isError,
              })}
            />
          </div>
        )}
        {showMessages && !isValue && (
          <>
            {this.errorMessage()}
            {this.warningMessage()}
          </>
        )}
      </>
    );
  }
}

export const TextField: FC<
  BaseFieldProps & BaseFieldCustomProperties & TextFieldProperties
> = (properties) => (
  <Field component={RenderTextField} type="text" {...properties} />
);

export default TextField;
