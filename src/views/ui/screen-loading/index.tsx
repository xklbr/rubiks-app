import { FC } from 'react';
import { LoadingComponentProps } from 'react-loadable';

const ScreenLoading: FC<Partial<LoadingComponentProps>> = () => (
  <div className="relative h-5/6">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="border-t-transparent border-solid animate-spin rounded-full border-gray-400 border-4 h-20 w-20" />
    </div>
  </div>
);

export default ScreenLoading;
