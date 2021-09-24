import styles from './main.module.less';
import { ToolBar } from '@/main/modules/toolBar';
import { LeftNav } from './modules/leftNav';
import { RightNav } from './modules/rightNav';
import { Content } from '@/main/modules/content';

export const Main = function (){
  return(
    <div className={styles.main}>
      <ToolBar />
      <div className={styles.body}>
        <LeftNav />
        <Content />
        <RightNav />
      </div>
    </div>
  )
}
