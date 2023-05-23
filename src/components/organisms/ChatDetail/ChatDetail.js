import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import { sendMessage } from '@store/slices/appSlice';

import styles from './ChatDetail.module.scss';

const ChatList = () => {
  const dispatch = useDispatch();

  const activeOrderId = useSelector((state) => state.appReducer.activeOrderId);
  const orderData =
    useSelector((state) => state.appReducer.chatMap)[activeOrderId] || {};

  const [message, setMessage] = useState('');

  const messageList = orderData.messageList || [];

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
      <img src={orderData.imageURL} alt="img_url" className={styles.image} />
        <h2>{orderData.title}</h2>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.messagesContainer}>
          {messageList.length === 0 && (
            <div className={styles.noMessage}>
              <span>Send a message to start chatting</span>
            </div>
          )}
          {messageList.map((item) => (
            <div
              key={item.messageId}
              className={cx(styles.messageItemRoot, {
                [styles.botMessageItemRoot]: item.sender === 'BOT',
              })}
            >
              {item.message}
            </div>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
            placeholder="Type a Message..."
            className={styles.input}
          />
          <button
            onClick={() => {
              dispatch(sendMessage({ orderId: activeOrderId, message }));
              setMessage('');
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
