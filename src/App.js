import { useRoutes } from 'react-router-dom';

import { ROUTES } from '@routes';

const App = () => {
  const renderedRoutes = useRoutes(ROUTES);

  return renderedRoutes;
};

export default App;
