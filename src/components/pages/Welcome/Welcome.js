import { useSelector } from 'react-redux';
import ChatList from '@organisms/ChatList';
import ChatDetail from '@organisms/ChatDetail';

import styles from './Welcome.module.scss';

const Welcome = () => {
  const activeOrderId = useSelector((state) => state.appReducer.activeOrderId);

  return (
    <div className={styles.root}>
      <ChatList />
      {activeOrderId && <ChatDetail />}
    </div>
  );
};

export default Welcome;
