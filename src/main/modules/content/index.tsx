import styles from './index.module.less';
import { Playground } from '@/main/modules/content/playground';
import React, { useMemo, useRef, useState } from 'react';
import Calibration from './components/calibration';
import { throttle } from '@/main/utils/tools';

export function Content() {
  const [diffmove, setDiffMove] = useState({
    start: { x: 0, y: 0 },
    move: false,
  });
  const [scaleNum, setScale] = useState(1);
  const [dragstate, setDragState] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const mousedownfn = useMemo(() => {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === containerRef.current) {
        setDiffMove({
          start: {
            x: e.clientX,
            y: e.clientY,
          },
          move: true,
        });
      }
    };
  }, []);
  const mousemovefn = useMemo(() => {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      if (diffmove.move) {
        let diffx: number;
        let diffy: number;
        const newX = e.clientX;
        const newY = e.clientY;
        diffx = newX - diffmove.start.x;
        diffy = newY - diffmove.start.y;
        setDiffMove({
          start: {
            x: newX,
            y: newY,
          },
          move: true,
        });
        setDragState((prev) => {
          return {
            x: prev.x + diffx,
            y: prev.y + diffy,
          };
        });
      }
    };
  }, [diffmove.move, diffmove.start.x, diffmove.start.y]);
  const mouseupfn = useMemo(() => {
    return () => {
      setDiffMove({
        start: { x: 0, y: 0 },
        move: false,
      });
    };
  }, []);
  const onwheelFn = useMemo(() => {
    return (e: React.WheelEvent<HTMLDivElement>) => {
      if (e.deltaY < 0) {
        setDragState((prev) => ({
          x: prev.x,
          y: prev.y + 40,
        }));
      } else {
        setDragState((prev) => ({
          x: prev.x,
          y: prev.y - 40,
        }));
      }
    };
  }, []);
  return (
    <div className={styles.content}>
      <div
        className={styles.tickMark}
        id="calibration"
        ref={containerRef}
        onMouseDown={mousedownfn}
        onMouseMove={throttle(mousemovefn, 500)}
        onMouseUp={mouseupfn}
        onMouseLeave={mouseupfn}
        onWheel={onwheelFn}
      >
        <div className={styles.tickMarkTop}>
          <Calibration direction="up" id="calibrationUp" multiple={scaleNum} />
        </div>
        <div className={styles.tickMarkLeft}>
          <Calibration
            direction="right"
            id="calibrationRight"
            multiple={scaleNum}
          />
        </div>
      </div>
      <Playground />
    </div>
  );
}
