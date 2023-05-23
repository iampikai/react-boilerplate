import { setChatFilterQuery } from '@store/slices/appSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ChatListFilter.module.scss';

const ChatListFilter = () => {
  const dispatch = useDispatch();
  const chatFilterQuery = useSelector(
    (state) => state.appReducer.chatFilterQuery
  );

  const handleChange = useCallback(
    (e) => {
      dispatch(setChatFilterQuery(e.target.value));
    },
    [dispatch]
  );

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Filter by Title / Order ID</h3>
      <input
        type="text"
        className={styles.filterInput}
        placeholder="Start typing to search"
        onChange={handleChange}
        value={chatFilterQuery}
      />
    </div>
  );
};

export default ChatListFilter;
