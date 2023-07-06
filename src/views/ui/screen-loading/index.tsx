import { FC } from 'react';
import { LoadingComponentProps } from 'react-loadable';

const ScreenLoading: FC<Partial<LoadingComponentProps>> = () => (
  <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
    <div className="border-t-transparent border-solid animate-spin  rounded-full border-gray-400 border-4 h-20 w-20" />
  </div>
);

export default ScreenLoading;
