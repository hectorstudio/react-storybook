import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './TwoColumnGrid.module.scss';

interface Props {
  /**
   * Gap between elements and to parent in pixel.
   * Default: 15 (px)
   */
  size?: 'normal' | 'big';
}

const TwoColumnGrid: FC<Props> = ({ children, size }) => (
  <div className={classNames(styles.twoColumnContainer, styles[size === 'big' ? 'big' : 'normal'])}>
    {children}
  </div>
);

export default TwoColumnGrid;
