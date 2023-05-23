import { useSelector } from 'react-redux';
import cx from 'classnames';
import styles from './ChatItem.module.scss';

const ChatItem = ({
  title,
  orderId,
  messageList,
  imageURL,
  latestMessageTimestamp,
  onClick,
}) => {
  const isActive = useSelector(
    (state) => state.appReducer.activeOrderId === orderId
  );
  const { message: lastMessage } = messageList[messageList.length - 1] || {};

  return (
    <div
      className={cx(styles.root, { [styles.active]: isActive })}
      onClick={onClick}
    >
      <div className={styles.imageContainer}>
        <img src={imageURL} alt="img_url" className={styles.image} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <span>{title}</span>
          <span>{new Date(latestMessageTimestamp).toLocaleDateString()}</span>
        </div>
        <span>Order {orderId}</span>
        <span>{lastMessage}</span>
      </div>
    </div>
  );
};

export default ChatItem;
