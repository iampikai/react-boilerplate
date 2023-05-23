import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChatItem from '@molecules/ChatItem';
import ChatListFilter from '@molecules/ChatListFilter';
import { setActiveOrderId } from '@store/slices/appSlice';

import styles from './ChatList.module.scss';

const ChatList = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.appReducer.chats);
  const chatFilterQuery = useSelector(
    (state) => state.appReducer.chatFilterQuery
  );

  const filteredChats = useMemo(
    () =>
      chats.filter(
        ({ title, orderId }) =>
          title.toLowerCase().includes(chatFilterQuery) ||
          orderId.toLowerCase().includes(chatFilterQuery)
      ),
    [chats, chatFilterQuery]
  );

  return (
    <div className={styles.root}>
      <div className={styles.filterContainer}>
        <ChatListFilter />
      </div>
      <div>
        {filteredChats.map((item) => (
          <ChatItem
            {...item}
            key={item.orderId}
            onClick={() => dispatch(setActiveOrderId(item.orderId))}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
