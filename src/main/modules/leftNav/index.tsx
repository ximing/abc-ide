import styles from './index.module.less';
import { Sidebar } from '@/main/modules/leftNav/sidebar';

export function LeftNav() {
  return (
    <div className={styles.leftNav}>
      <Sidebar />
      <div className={styles.collapseGutter}></div>
    </div>
  );
}
