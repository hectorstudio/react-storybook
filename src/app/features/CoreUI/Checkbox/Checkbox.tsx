import React, { FC, forwardRef, Ref, useRef, useCallback, useState, useEffect } from 'react';

import styles from './Checkbox.module.scss';
import CheckboxIcon from '../Icons/CheckboxIcon';
import Label from '../Label/Label';
import useHover from '../../../../utils/hooks/useHover'

interface Props {
  /**
   * Identifier for form submit
   */
  name?: string;

  /**
   * Label to show above input
   */
  label?: string;

  /**
   * Default state of checkbox
   */
  checked?: boolean;

  /**
   * Can not change checked state. Default: false
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

const Checkbox: FC<Props> = forwardRef((props, ref) => {
  const { label, checked, disabled, onChange, ...otherProps } = props;

  const [isChecked, setChecked] = useState(!!checked);

  useEffect(() => setChecked(!!checked), [!!checked])

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

  const labelRef = useRef(null);

  return (
    <Label ref={labelRef} className={styles.label} title={label || ''} disabled={disabled} position={'right'} >
      <input
        type='checkbox'
        ref={ref}
        className={styles.input}
        checked={isChecked}
        disabled={disabled}
        onChange={toggle}
        {...otherProps}
      />
      <CheckboxIcon isActive={isChecked} hasHover={!disabled && useHover(labelRef)} />
    </Label>
  );
});

export default Checkbox;
