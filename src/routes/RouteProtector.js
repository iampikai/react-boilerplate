import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import RouteConstants from './routes.constants';

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
            to={`${RouteConstants.PRIVATE_MODE_REDIRECT_TO}?redirect=${pathname}`}
          />
        );
      case MODES.RESTRICTED:
        return isAuthed ? (
          <Navigate replace to={RouteConstants.RESTRICTED_MODE_REDIRECT_TO} />
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
