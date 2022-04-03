import { useCallback } from 'react';
import { Navigate } from 'react-router-dom';

import Constants from '@constants';

const MODES = {
  RESTRICTED: 'RESTRICTED',
  PRIVATE: 'PRIVATE',
};

const RouteProtector = ({ children, isAuthed, mode, path }) => {
  const renderComponent = useCallback(() => {
    switch (mode) {
      case MODES.PRIVATE:
        return isAuthed ? (
          children
        ) : (
          <Navigate
            to={Constants.ROUTES.PRIVATE_MODE_REDIRECT_TO}
            state={{ path }}
          />
        );
      case MODES.RESTRICTED:
        return isAuthed ? (
          <Navigate to={Constants.ROUTES.RESTRICTED_MODE_REDIRECT_TO} />
        ) : (
          children
        );
      default:
        return children;
    }
  }, [children, isAuthed, mode]);

  return renderComponent();
};

export { MODES };
export default RouteProtector;
