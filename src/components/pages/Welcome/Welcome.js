import { useNavigate } from 'react-router-dom';

import { Images } from '@assets';

import { interpolate } from '@utils';

import styles from './Welcome.module.scss';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.App} onClick={() => navigate('/home')}>
      <header className={styles['App-header']}>
        <img src={Images.logo} className={styles['App-logo']} alt="logo" />
        <p
          dangerouslySetInnerHTML={{
            __html: interpolate('Edit {value} and save to reload.', {
              value: '<code>src/App.js</code>',
            }),
          }}
        />
        <a
          className={styles['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Welcome;
