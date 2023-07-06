/* eslint-disable import/no-duplicates */
// @ts-nocheck
import { useEffect, useState, FC, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

import { getAuthToken } from 'modules/auth/selectors';
import { SDK } from 'utils/sdk';

const SdkLoader: FC<PropsWithChildren<{}>> = ({ children }) => {
  const token = useSelector(getAuthToken);
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await SDK.init();
      SDK.setToken(token);
      setReady(true);
    })();
  }, [token]);

  if (!isReady) return null;

  return children;
};

export default SdkLoader;
