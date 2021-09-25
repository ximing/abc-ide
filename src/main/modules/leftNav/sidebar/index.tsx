import { IconFont } from '@/main/components/icon';
import { useState } from 'react';
import styles from './index.module.less';

export function Sidebar() {
  const [active, setActive] = useState('component');
  return (
    <div className={styles.sidebar}>
      <div
        className={`${styles.iconBtn} ${
          active === 'tree' ? styles.active : ''
        }`}
      >
        <IconFont style={{ fontSize: '25px' }} type="icon-tree-table" />
      </div>
      <div
        className={`${styles.iconBtn} ${
          active === 'component' ? styles.active : ''
        }`}
      >
        <IconFont style={{ fontSize: '25px' }} type="icon-component" />
      </div>
    </div>
  );
}
