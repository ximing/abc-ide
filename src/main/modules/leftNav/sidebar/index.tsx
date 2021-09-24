import { IconFont } from '@/main/components/icon';
import styles from './index.module.less';

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.iconBtn}>
        <IconFont style={{ fontSize: '25px' }} type="icon-tree-table" />
      </div>
      <div className={styles.iconBtn}>
        <IconFont style={{ fontSize: '25px' }} type="icon-component" />
      </div>
    </div>
  );
}
