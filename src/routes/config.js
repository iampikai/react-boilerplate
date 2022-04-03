import { Welcome } from '@pages';

const routes = (isAuthed) => [
  {
    path: '*',
    element: <Welcome />,
  },
];

export default routes;
