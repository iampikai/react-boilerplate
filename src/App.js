import { useRoutes } from 'react-router-dom';

import { ROUTES } from '@routes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats } from '@store/slices/appSlice';

const App = () => {
  const renderedRoutes = useRoutes(ROUTES);
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.appReducer.chats);

  useEffect(() => {
    if (chats.length) return;

    dispatch(fetchChats());
  }, [chats.length, dispatch]);

  return renderedRoutes;
};

export default App;
