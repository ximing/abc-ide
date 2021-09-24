import styles from './index.module.less';
export function Playground() {
  return (
    <div className={styles.playground} style={{ width: 375, height: 620 }}>
      <iframe style={{ height: '100%',width: '100%'}} src="./mobile.html" frameBorder="0" />
    </div>
  );
}
