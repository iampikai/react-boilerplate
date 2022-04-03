import { useIntl } from 'react-intl';

import { Images } from '@assets';
import styles from './Welcome.module.css';

const Welcome = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={Images.logo} className={styles['App-logo']} alt='logo' />
        <p
          dangerouslySetInnerHTML={{
            __html: formatMessage(
              { id: 'page.welcome.edit' },
              { value: '<code>src/App.js</code>' }
            ),
          }}
        />
        <a
          className={styles['App-link']}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {formatMessage({ id: 'page.welcome.learnReact' })}
        </a>
      </header>
    </div>
  );
};

export default Welcome;
