import React, { FC, forwardRef, Ref, useCallback, useState } from 'react';
import classNames from 'classnames';

import Label from '../Label/Label';
import styles from './Toggle.module.scss';

interface Props {
  /**
   * Identifier for form submit
   */
  name?: string;

  /**
   * Label to be displayed alongside with toggle input
   */
  label?: string;

  /**
   * Default value of toggle input, does not make the input controlled
   */
  defaultValue?: boolean;

  /**
   * Read only mode. Default: false
   */
  disabled?: boolean;

  /**
   * Register callback for change event
   */
  onChange?: (newChecked: boolean) => void;

  /**
   * React ref passtrough to input node
   */
  ref?: Ref<HTMLInputElement>;
}

const Toggle: FC<Props> = forwardRef((props, ref) => {
  const { label, defaultValue, disabled, onChange, ...otherProps } = props;

  const [isChecked, setChecked] = useState(!!defaultValue);

  const toggle = useCallback(
    () => {
      const newValue = !isChecked;
      setChecked(newValue);

      if (onChange) {
        onChange(newValue);
      }
    },
    [isChecked, onChange],
  );

  return (
    <Label title={label || ''} disabled={disabled} position='right'>
      <span
        className={classNames(styles.toggleButton, {
          [styles.checked]: isChecked,
          [styles.disabled]: disabled,
        })}
      >
        <div className={classNames(styles.toggleHandle, {
          [styles.checked]: isChecked,
          [styles.disabled]: disabled,
        })}
        />
      </span>
      <input
        type='checkbox'
        className={styles.input}
        ref={ref}
        checked={isChecked}
        disabled={disabled}
        onChange={toggle}
        {...otherProps}
      />
    </Label>
  );
});

export default Toggle;
