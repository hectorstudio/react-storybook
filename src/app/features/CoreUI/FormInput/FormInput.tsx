import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';

import styles from './FormInput.module.scss';
import AlertCircleIcon from '../Icons/AlertCircleIcon';
import Input from '../Input/Input';
import Label from '../Label/Label';

interface Props {
  /**
   * Input value type
   */
  type?: 'text' | 'number' | 'email' | 'password';

  /**
   * Identifier for form submit
   */
  name?: string;

  /**
   * Label to show above input
   */
  label: string;

  /**
   * Placeholder to show when empty
   */
  placeholder?: string;

  /**
   * Register callback for change event
   */
  onChange?: () => void;

  /**
   * Read only mode. Default: false
   */
  disabled?: boolean;

  /**
   * Stretch to max width. Default: false
   */
  fillWidth?: boolean;

  /**
   * Current value of input
   */
  value?: string;

  /**
   * Displays error msg underneath the input field
   */
  error?: string;

  /**
   * React ref passtrough to input node
   */
  ref?: Ref<HTMLInputElement>;
}

const FormInput: FC<Props> = forwardRef((props, ref) => {
  const { fillWidth, disabled, label, error, ...otherProps } = props;

  const errorLabel = error && (
    <div className={styles.errorLabel}>
      {error}
      <AlertCircleIcon />
    </div>
  );

  return (
    <Label title={label} disabled={disabled} className={classNames(styles.label, { [styles.fillWidth]: fillWidth })}>
      <Input
        ref={ref}
        error={!!error}
        fillWidth={fillWidth}
        disabled={disabled}
        {...otherProps}
      />
      {errorLabel}
    </Label>
  );
});

export default FormInput;
