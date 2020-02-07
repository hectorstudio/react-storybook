import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface Props {
  /**
   * Define button behavior. Default: button
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Define button size. Default: normal
   */
  size?: 'normal' | 'small' | 'big';

  /**
   * Let button take full width of parent. Default: false
   */
  fillWidth?: boolean;

  /**
   * swap colors of text and background. Default: false
   */
  inverse?: boolean;

  /**
   * Disable button interaction and display button in gray colors. Default: false
   */
  disabled?: boolean;

  /**
   * Button with loading indicator and disabled. Default: false
   */
  loading?: boolean;

  /**
   * Register callback for click event
   */
  onClick?: () => void;
}

const renderSpinner = () => (
  <div className={styles.spinner}>
    <div />
    <div />
  </div>
);

/**
 * Simple Button encapsulating all design variations
 */
const Button: FC<Props> = ({
  children,
  inverse,
  onClick,
  fillWidth,
  disabled,
  loading,
  type = 'button',
  size = 'normal',
}) => {
  const classes = classNames(
    styles.button,
    styles[size],
    {
      [styles.inverse]: inverse,
      [styles.fullWidth]: fillWidth,
      [styles.loading]: loading,
    },
  );
  const content = loading ? renderSpinner() : children;

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </button>
  );
};

export default Button;
