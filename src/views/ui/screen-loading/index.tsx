import { FC } from 'react';
import classnames from 'classnames';
import { LoadingComponentProps } from 'react-loadable';

type ScreenLoadingProperties = {
  isInitial?: boolean;
};

const ScreenLoading: FC<
  Partial<LoadingComponentProps> & ScreenLoadingProperties
> = ({ isInitial = true }) => (
  <div
    data-testid="test__screen-loader"
    className={classnames(
      'ui__loader d-flex justify-content-center align-items-center',
      { 'ui__loader--wrapper': isInitial },
    )}
  >
    <div className="ui__spinner" data-testid="test__spinner" />
  </div>
);

export default ScreenLoading;
