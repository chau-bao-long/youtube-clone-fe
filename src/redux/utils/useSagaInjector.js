import { useEffect } from 'react';

import { store } from '../store';
import { RESTART_ON_REMOUNT } from '../constants';

export default (key, saga, mode = RESTART_ON_REMOUNT) => {
  useEffect(() => {
    store.injectSaga(key, saga, mode);
    return () => {
      store.ejectSaga(key);
    };
  }, [key, saga, mode]);
};
