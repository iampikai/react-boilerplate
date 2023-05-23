import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Constants from '@constants';
import { useSelector } from 'react-redux';

const MODES = {
  RESTRICTED: 'RESTRICTED',
  PRIVATE: 'PRIVATE',
};

const RouteProtector = ({ children, mode }) => {
  const isAuthed = useSelector((state) => state.appReducer.isAuthed);
  const { pathname } = useLocation();

  const Component = useMemo(() => {
    switch (mode) {
      case MODES.PRIVATE:
        return isAuthed ? (
          children
        ) : (
          <Navigate
            replace
            state={{ path: pathname }}
            to={Constants.ROUTES.PRIVATE_MODE_REDIRECT_TO}
          />
        );
      case MODES.RESTRICTED:
        return isAuthed ? (
          <Navigate replace to={Constants.ROUTES.RESTRICTED_MODE_REDIRECT_TO} />
        ) : (
          children
        );
      default:
        return children;
    }
  }, [children, isAuthed, mode, pathname]);

  return Component;
};

export { MODES };
export default RouteProtector;
